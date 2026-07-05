import { LightningElement, track } from 'lwc';

export default class Onselectcontentchange extends LightningElement {
    @track selectedValue = 'option1'; // Set default value to 'option1'

    options = [
        { label: 'Audit', value: 'option1' },
        { label: 'Commercial', value: 'option2' }
    ];

    handleChange(event) {
        this.selectedValue = event.detail.value;
    }

    get option1Content() {
        return this.selectedValue === 'option1';
    }

    get option2Content() {
        return this.selectedValue === 'option2';
    }

  
}