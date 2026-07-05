import { LightningElement,track } from 'lwc';
import myCommonStyles from '@salesforce/resourceUrl/scoretemp';
import { loadStyle } from 'lightning/platformResourceLoader';


export default class Uiscoreaddpo extends LightningElement {


    constructor() {
        super();
        loadStyle(this, myCommonStyles)
            .then(result => {
                // Possibly do something when load is complete.
            });
    }



}