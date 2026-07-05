import { LightningElement } from 'lwc';
import myCommonStyles from '@salesforce/resourceUrl/globalstyle';
import { loadStyle } from 'lightning/platformResourceLoader';


export default class Richtextareacmp extends LightningElement {

      constructor() {
        super();
        loadStyle(this, myCommonStyles)
            .then(result => {
                // Possibly do something when load is complete.
            });
    }

}