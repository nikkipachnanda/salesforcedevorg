import { LightningElement } from 'lwc';
import myCommonStyles from '@salesforce/resourceUrl/idiafcss';
import { loadStyle } from 'lightning/platformResourceLoader';
import idiafimg from '@salesforce/resourceUrl/idiafimg';



export default class Uidiafimagesnew extends LightningElement {

    bottle = idiafimg + '/water.jpg';
    
    showModal = false;

    constructor() {
        super();
            loadStyle(this, myCommonStyles)
            .then(result => {
                // Possibly do something when load is complete.
            });
    }


    openModal() {
        // Setting boolean variable to true, this will show the Modal
        this.showModal = true;
    }

    closeModal() {
        // Setting boolean variable to false, this will hide the Modal
        this.showModal = false;
    }

    

}