import { LightningElement,track } from 'lwc';
import myCommonStyles from '@salesforce/resourceUrl/arlo';
import { loadStyle } from 'lightning/platformResourceLoader';
import commeximg from '@salesforce/resourceUrl/commeximg';

export default class Uiarlohomepage extends LightningElement {

    fruit = commeximg + '/fruit.png';

    constructor() {
        super();
        loadStyle(this, myCommonStyles)
            .then(result => {
                // Possibly do something when load is complete.
            });
    }

}