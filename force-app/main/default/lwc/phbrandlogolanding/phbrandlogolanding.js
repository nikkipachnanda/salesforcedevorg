import { LightningElement } from 'lwc';
import myCommonStyles from '@salesforce/resourceUrl/phlogoapp';
import { loadStyle } from 'lightning/platformResourceLoader';

export default class Phbrandlogolanding extends LightningElement {

      constructor() {
        super();
            loadStyle(this, myCommonStyles)
            .then(result => {
                // Possibly do something when load is complete.
            });
    }

}