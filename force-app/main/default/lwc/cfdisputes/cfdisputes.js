import { LightningElement } from 'lwc';
import myCommonStyles from '@salesforce/resourceUrl/customfeet';
import { loadStyle } from 'lightning/platformResourceLoader';
import cfimages from '@salesforce/resourceUrl/cfimg';

export default class Cfdisputes extends LightningElement {

       loginbgUrl = cfimages + '/loginbg.png'; 

       constructor() {
        super();
        loadStyle(this, myCommonStyles)
            .then(result => {
                // Possibly do something when load is complete.
            });
    }

      value = 'inProgress';

    get options() {
        return [
            { label: 'Missing Item', value: 'Missing Item' },
            { label: 'Insurance', value: 'Insurance' },
            { label: 'General / Other Dispute', value: 'General / Other Dispute' },
        ];
    }

    handleChange(event) {
        this.value = event.detail.value;
    }

     richtext = '<span>Add Comment </span>';

    handleChangeRT(e) {
        this.richtext = e.detail.value;
    }

    value = [];

    get optionscheck() {
        return [
            { label: 'Ross', value: 'Rear Door including window' }
        ];
    }
}