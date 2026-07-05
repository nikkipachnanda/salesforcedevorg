import { LightningElement } from 'lwc';
import myCommonStyles from '@salesforce/resourceUrl/customfeet';
import { loadStyle } from 'lightning/platformResourceLoader';
import cfimages from '@salesforce/resourceUrl/cfimg';
export default class Cfdisputepath extends LightningElement {

   logo = cfimages + '/logo.svg'; 

     constructor() {
        super();
        loadStyle(this, myCommonStyles)
            .then(result => {
                // Possibly do something when load is complete.
            });
    }

}