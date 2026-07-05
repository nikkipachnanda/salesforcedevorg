import { LightningElement } from 'lwc';
import myCommonStyles from '@salesforce/resourceUrl/global';
import { loadStyle } from 'lightning/platformResourceLoader';
export default class Accordiansaleforce extends LightningElement {

     activeSectionMessage = '';

    handleToggleSection(event) {
        this.activeSectionMessage =
            'Open section name:  ' + event.detail.openSections;
    }

    handleSetActiveSectionC() {
        const accordion = this.template.querySelector('.example-accordion');

        accordion.activeSectionName = 'C';
    }

      constructor() {
        super();
        loadStyle(this, myCommonStyles)
            .then(result => {
                // Possibly do something when load is complete.
            });
    }

}