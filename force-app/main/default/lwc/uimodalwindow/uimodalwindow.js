import { LightningElement,track } from 'lwc';
export default class Uimodalwindow extends LightningElement {
		
		@track showModal = false;

    openModal() {
        // Setting boolean variable to true, this will show the Modal
        this.showModal = true;
    }

    closeModal() {
        // Setting boolean variable to false, this will hide the Modal
        this.showModal = false;
    }
}