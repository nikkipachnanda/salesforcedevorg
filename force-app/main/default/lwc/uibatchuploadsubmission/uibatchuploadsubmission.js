import { LightningElement } from 'lwc';
import myCommonStyles from '@salesforce/resourceUrl/globalcss';
import { loadStyle } from 'lightning/platformResourceLoader';
import supuximg from '@salesforce/resourceUrl/supuximg';

export default class Uibatchuploadsubmission extends LightningElement {
		botarrow = supuximg + '/ic_doc.svg';
		botarrowact = supuximg + '/ic_doc_white.svg';
		icnfile = supuximg + '/ic_upload.svg';
		icnfileact = supuximg + '/ic_upload_white.svg';
		icnarw = supuximg + '/ic_arrow.svg';
		icnarwact = supuximg + '/ic_arrow_white.svg';
		
		constructor() {
        super();
        loadStyle(this, myCommonStyles)
            .then(result => {
                // Possibly do something when load is complete.
            });
    }
}