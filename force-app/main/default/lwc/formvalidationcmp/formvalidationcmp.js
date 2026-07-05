import { LightningElement } from 'lwc';
export default class Formvalidationcmp extends LightningElement {
      selectedValue = ''; // Dropdown value
    firstName = ''; // Input 1
     lastName = ''; // Input 2

    // Dropdown options
    options = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' }
    ];

    // Handle input change
    handleInputChange(event) {
        this[event.target.name] = event.target.value;
        event.target.closest('.slds-form-element').classList.remove('slds-has-error');
    }

    // Handle dropdown change
    handleChange(event) {
        this.selectedValue = event.target.value;
        event.target.closest('.slds-form-element').classList.remove('slds-has-error');
    }

    // Handle Save button click
    handleSave() {
        let isValid = true;

        // Select all input fields and dropdown
        const fields = this.template.querySelectorAll('lightning-input, lightning-combobox');

        fields.forEach(field => {
            if (!field.value) {
                field.closest('.slds-form-element').classList.add('slds-has-error');
                isValid = false;
            }
        });

        if (isValid) {
            console.log('Form submitted successfully!');
            // Add save logic here
        }
    }
}