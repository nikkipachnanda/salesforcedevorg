import { LightningElement } from 'lwc';
import myCommonStyles from '@salesforce/resourceUrl/comexcss';
import { loadStyle } from 'lightning/platformResourceLoader';
import images from '@salesforce/resourceUrl/comeximg';

export default class Comexhomepage extends LightningElement {
       constructor() {
        super();
        loadStyle(this, myCommonStyles)
            .then(result => {
                // Possibly do something when load is complete.
            });
    }
}