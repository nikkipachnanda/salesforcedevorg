import { LightningElement } from 'lwc';
import myCommonStyles from '@salesforce/resourceUrl/globalcss';
import { loadStyle } from 'lightning/platformResourceLoader';
import bigwimages from '@salesforce/resourceUrl/bigwimages';

export default class Analyticshomepage extends LightningElement {
		wwdashboard = bigwimages + '/wwdashboard.svg';
		bigwdashboard = bigwimages + '/bigwdashboard.svg';
		bigwlogo = bigwimages + '/bigwlogo.png';
		wwlogo = bigwimages + '/wwlogo.png';
		arrowright = bigwimages + '/arrow-right.svg';

		
		constructor() {
        super();
        loadStyle(this, myCommonStyles)
            .then(result => {
                // Possibly do something when load is complete.
            });
    }
}