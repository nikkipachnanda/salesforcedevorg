import { LightningElement } from 'lwc';
import myCommonStyles from '@salesforce/resourceUrl/idiafcss';
import { loadStyle } from 'lightning/platformResourceLoader';


export default class Uidiafcool extends LightningElement {
    constructor() {
        super();
            loadStyle(this, myCommonStyles)
            .then(result => {
                // Possibly do something when load is complete.
            });
    }

    

}