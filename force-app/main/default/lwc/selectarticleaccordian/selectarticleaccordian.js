import { LightningElement } from 'lwc';
export default class Selectarticleaccordian extends LightningElement {
		
	activeSectionMessage = '';

    handleToggleSection(event) {
        this.activeSectionMessage =
            'Open section name:  ' + event.detail.openSections;
    }

    handleSetActiveSectionC() {
        const accordion = this.template.querySelector('.example-accordion');

        accordion.activeSectionName = 'C';
    }
		
		
		  options = [
        { label: 'Ross', value: 'option1' }
      
    ];

    // Select option1 by default
    value = 'option1';

    handleChange(event) {
        const selectedOption = event.detail.value;
        console.log('Option selected with value: ' + selectedOption);
    }
}