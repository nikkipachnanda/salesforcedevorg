import { LightningElement } from 'lwc';
import myCommonStyles from '@salesforce/resourceUrl/globalstyle';
import { loadStyle } from 'lightning/platformResourceLoader';
export default class Mobiemodalwindow extends LightningElement {


     constructor() {
        super();
        loadStyle(this, myCommonStyles)
            .then(result => {
                // Possibly do something when load is complete.
            });
         
    }

     isOpen = false;

    openModal() {
        this.isOpen = true;
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        this.isOpen = false;
        document.body.style.overflow = 'auto';
    }

    disconnectedCallback() {
        document.body.style.overflow = 'auto';
    }
}