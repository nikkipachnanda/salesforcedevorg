import { LightningElement } from 'lwc';
import myCommonStyles from '@salesforce/resourceUrl/globalcss';
import { loadStyle } from 'lightning/platformResourceLoader';

export default class Designtokens extends LightningElement {

    constructor() {
    super();
    loadStyle(this, myCommonStyles)
        .then(result => {
            // Possibly do something when load is complete.
        });
}
    
}