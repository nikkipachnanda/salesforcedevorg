import { LightningElement } from 'lwc';
import myCommonStyles from '@salesforce/resourceUrl/globalcss';
import { loadStyle } from 'lightning/platformResourceLoader';
import supuximg from '@salesforce/resourceUrl/supuximg';

export default class UploadBatchFile extends LightningElement {
	icnques = supuximg + '/ic_insights.svg';
		
		constructor() {
        super();
        loadStyle(this, myCommonStyles)
            .then(result => {
                // Possibly do something when load is complete.
            });
    }
}