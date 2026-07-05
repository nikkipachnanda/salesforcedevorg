import { LightningElement, track } from 'lwc';
import GLOBAL_STYLE from '@salesforce/resourceUrl/Score';
import Score_Images from '@salesforce/resourceUrl/slideimages';


export default class Actionform extends LightningElement 
{

    knowimg1 = Score_Images + '/scoreimages/knowfimg.jpg';
    knowimg2 = Score_Images + '/scoreimages/knowsimg.jpg';
    knowimg3 = Score_Images + '/scoreimages/knowtimg.jpg';
    knowimg3 = Score_Images + '/scoreimages/knowtimg.jpg';
    documenticn = Score_Images + '/scoreimages/docicn.jpg';
    eyeicn = Score_Images + '/scoreimages/preview.png';
    attachicn = Score_Images + '/scoreimages/attachicn.png';
    arrwdown = Score_Images + '/scoreimages/arrowdown.png';
    expicn = Score_Images + '/scoreimages/expicn.png';
    

    @track value = '';

    get options() {
        return [
            { label: 'Submit Resolution', value: 'option1' },
            { label: 'Submit Support Request', value: 'option2' },
        ];
    }

    get acceptedFormats() {
        return ['.pdf', '.png'];
    }

    handleUploadFinished(event) {
        // Get the list of uploaded files
        const uploadedFiles = event.detail.files;
    }
}