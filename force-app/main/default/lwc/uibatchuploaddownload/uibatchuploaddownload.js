import { LightningElement, track } from 'lwc';
import myCommonStyles from '@salesforce/resourceUrl/globalcss';
import { loadStyle } from 'lightning/platformResourceLoader';
import supuximg from '@salesforce/resourceUrl/supuximg';

export default class Uibatchuploaddownload extends LightningElement {
		
	@track value = 'inProgress';
			icnno = supuximg + '/ic_number.svg';
		
		  icnques = supuximg + '/ic_insights.svg';
		icnarw = supuximg + '/ic_arrow.svg';
		icnfrd = supuximg + '/ic_go.svg';

    get options() {
        return [
            { label: 'Deign Item', value: 'Design Item' }
        ];
    }
		
		   handleChange(event) {
        this.value = event.detail.value;
    }
		
			constructor() {
        super();
        loadStyle(this, myCommonStyles)
            .then(result => {
                // Possibly do something when load is complete.
            });
    }
		
		
}