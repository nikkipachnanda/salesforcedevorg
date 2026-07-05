import { LightningElement, api } from 'lwc';
import myCommonStyles from '@salesforce/resourceUrl/common';
import { loadStyle } from 'lightning/platformResourceLoader';
export default class Reusabletooltip extends LightningElement {

     @api variant = "green"; 
    // options: green, red, grey

    get tooltipClass() {
        return `tooltip tooltip-${this.variant}`;
    }

     constructor() {
        super();
        loadStyle(this, myCommonStyles)
            .then(result => {
                // Possibly do something when load is complete.
            });
    }

}