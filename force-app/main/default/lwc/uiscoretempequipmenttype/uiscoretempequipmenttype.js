import { LightningElement,track } from 'lwc';
import myCommonStyles from '@salesforce/resourceUrl/scoretemp';
import { loadStyle } from 'lightning/platformResourceLoader';
export default class Uiscoretempequipmenttype extends LightningElement {

     constructor() {
        super();
        loadStyle(this, myCommonStyles)
            .then(result => {
                // Possibly do something when load is complete.
            });
    }

    selectedEquipmentType = '';

    equipmentTypeOptions = [
        { label: 'Trailer', value: 'Trailer' },
        { label: 'Container', value: 'Container' },
        { label: 'Air bridge', value: 'Air bridge' },
        { label: 'Other', value: 'Other' }
    ];

    handleEquipmentTypeChange(event) {
        this.selectedEquipmentType = event.detail.value;
        // You can perform additional actions based on the selected value here
        console.log('Selected Equipment Type:', this.selectedEquipmentType);
    }
}