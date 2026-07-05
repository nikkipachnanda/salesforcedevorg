import { LightningElement } from 'lwc';
import myCommonStyles from '@salesforce/resourceUrl/commexcss';
import { loadStyle } from 'lightning/platformResourceLoader';

export default class Globalcss extends LightningElement 
{

     constructor() {
        super();
        loadStyle(this, myCommonStyles)
            .then(result => {
                // Possibly do something when load is complete.
            });
    }


}