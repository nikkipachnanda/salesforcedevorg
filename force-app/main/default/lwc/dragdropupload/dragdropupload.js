import { LightningElement, track } from 'lwc';

export default class UploadFiles extends LightningElement {
     @track uploadedFiles1 = [];
    @track uploadedFiles2 = [];
    @track showUploadSection1 = true;
    @track showUploadSection2 = true;

    handleDragOver(event) {
        event.preventDefault();
        event.currentTarget.classList.add('drag-over');
    }

    handleDrop(event) {
        event.preventDefault();
        event.currentTarget.classList.remove('drag-over');

        const files = event.dataTransfer.files;
        if (event.currentTarget.classList.contains('upload-section1')) {
            this.uploadFiles(files, 'uploadedFiles1', 'showUploadSection1');
        } else if (event.currentTarget.classList.contains('upload-section2')) {
            this.uploadFiles(files, 'uploadedFiles2', 'showUploadSection2');
        }
    }

    handleFileChange1(event) {
        const files = event.target.files;
        this.uploadFiles(files, 'uploadedFiles1', 'showUploadSection1');
    }

    handleFileChange2(event) {
        const files = event.target.files;
        this.uploadFiles(files, 'uploadedFiles2', 'showUploadSection2');
    }

    uploadFiles(files, uploadedFilesVar, showUploadSectionVar) {
        for (let file of files) {
            let reader = new FileReader();
            reader.onload = (e) => {
                this[uploadedFilesVar] = [...this[uploadedFilesVar], { name: file.name, content: e.target.result }];
            };
            reader.readAsDataURL(file);
        }
        this[showUploadSectionVar] = false;
    }

    handleButtonClick1() {
        this.template.querySelector('.file-input1').click();
    }

    handleButtonClick2() {
        this.template.querySelector('.file-input2').click();
    }

    deleteFile1(event) {
        const index = event.target.dataset.index;
        this.uploadedFiles1 = this.uploadedFiles1.filter((_, i) => i != index);
        if (this.uploadedFiles1.length === 0) {
            this.showUploadSection1 = true;
        }
    }

    deleteFile2(event) {
        const index = event.target.dataset.index;
        this.uploadedFiles2 = this.uploadedFiles2.filter((_, i) => i != index);
        if (this.uploadedFiles2.length === 0) {
            this.showUploadSection2 = true;
        }
    }
}