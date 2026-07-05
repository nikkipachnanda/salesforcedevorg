import { LightningElement, track } from 'lwc';
import myCommonStyles from '@salesforce/resourceUrl/testcss';
import { loadStyle } from 'lightning/platformResourceLoader';

export default class TestLandingPage extends LightningElement {

     constructor() {
        super();
        loadStyle(this, myCommonStyles)
            .then(result => {
                // Possibly do something when load is complete.
            });
    }

    


}