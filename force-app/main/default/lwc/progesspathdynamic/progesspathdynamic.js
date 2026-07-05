import { LightningElement, track } from 'lwc';

export default class DropdownExample extends LightningElement {
    @track selectedValues = [];
    @track buttonValues = [
        { label: 'a', variant: 'success', disabled: false },
        { label: 'b', variant: 'success', disabled: false },
        { label: 'c', variant: 'success', disabled: true }
    ];
    @track options = [
        { label: 'a', value: 'a' },
        { label: 'b', value: 'b' },
        { label: 'c', value: 'c' },
        { label: 'd', value: 'd' },
        { label: 'e', value: 'e' },
        { label: 'f', value: 'f' },
        { label: 'g', value: 'g' },
        { label: 'h', value: 'h' },
        { label: 'i', value: 'i' },
        { label: 'j', value: 'j' }
    ];

    handleDropdownChange(event) {
        this.selectedValues = event.detail.value;
        this.updateButtonValues();
    }

    updateButtonValues() {
        const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
        const selectedIndex = this.selectedValues.length > 0 ? alphabet.indexOf(this.selectedValues[this.selectedValues.length - 1]) : -1; 
        this.buttonValues = [
            { 
                label: alphabet[selectedIndex - 1], 
                variant: selectedIndex - 1 === selectedIndex ? 'brand' : selectedIndex === 0 || selectedIndex === -1 ? 'inactive' : 'success', 
                disabled: selectedIndex === 0 || selectedIndex === -1 
            },
            { 
                label: alphabet[selectedIndex], 
                variant: selectedIndex === selectedIndex ? 'brand' : selectedIndex === -1 ? 'inactive' : 'success', 
                disabled: selectedIndex === -1 
            },
            { 
                label: alphabet[selectedIndex + 1], 
                variant: selectedIndex + 1 === selectedIndex ? 'brand' : selectedIndex === -1 || selectedIndex === alphabet.length - 1 ? 'inactive' : 'success', 
                disabled: selectedIndex + 1 === selectedIndex || selectedIndex === -1 || selectedIndex === alphabet.length - 1 
            }
        ];
    }
}