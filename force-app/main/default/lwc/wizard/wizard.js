import { LightningElement } from 'lwc';
import myCommonStyles from '@salesforce/resourceUrl/comexcss';
import { loadStyle } from 'lightning/platformResourceLoader';
import images from '@salesforce/resourceUrl/comeximg';

export default class Wizard extends LightningElement {

    
    tickcom = images + '/completedact.svg';
    editact = images + '/editact.svg';
    dissup = images + '/suppliers.svg';
    disrev = images + '/review.svg';
    

      constructor() {
        super();
        loadStyle(this, myCommonStyles)
            .then(result => {
                // Possibly do something when load is complete.
            });
    }
}