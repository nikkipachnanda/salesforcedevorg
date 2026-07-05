import { LightningElement } from 'lwc';
import myCommonStyles from '@salesforce/resourceUrl/idiafcss';
import { loadStyle } from 'lightning/platformResourceLoader';
import idiafimg from '@salesforce/resourceUrl/idiafimg';



export default class Uidiafheader extends LightningElement {

    bottle = idiafimg + '/water.jpg';

    constructor() {
        super();
            loadStyle(this, myCommonStyles)
            .then(result => {
                // Possibly do something when load is complete.
            });
    }

    

}