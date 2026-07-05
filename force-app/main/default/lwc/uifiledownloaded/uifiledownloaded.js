import { LightningElement } from 'lwc';
import myCommonStyles from '@salesforce/resourceUrl/globalcss';
import { loadStyle } from 'lightning/platformResourceLoader';
import supuximg from '@salesforce/resourceUrl/supuximg';

export default class Uifiledownloaded extends LightningElement {
		icnsheet = supuximg + '/exsheet.jpg';
				constructor() {
        super();
        loadStyle(this, myCommonStyles)
            .then(result => {
                // Possibly do something when load is complete.
            });
    }
}