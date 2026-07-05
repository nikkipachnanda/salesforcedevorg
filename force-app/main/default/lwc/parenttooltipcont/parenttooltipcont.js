import { LightningElement, track } from 'lwc';

export default class Parenttooltipcont extends LightningElement {
    @track activeDropdownId = null; // Track the currently active dropdown ID

    // Example options for the dropdowns
    dropdownOptionsA = [
        { value: 'optionA1', label: 'Option A1' },
        { value: 'optionA2', label: 'Option A2' },
        { value: 'optionA3', label: 'Option A3' }
    ];

    dropdownOptionsB = [
        { value: 'optionB1', label: 'Option B1' },
        { value: 'optionB2', label: 'Option B2' },
        { value: 'optionB3', label: 'Option B3' }
    ];

   handleToggleDropdown(event) {
        event.preventDefault();
        const toggledDropdownId = event.detail.dropdownId;
        const isOpen = event.detail.isOpen;

        // Close other dropdowns if any is open
        const dropdownComponents = this.template.querySelectorAll('c-tooltipcomponentctop');
        dropdownComponents.forEach(dropdown => {
            if (dropdown.dropdownId !== toggledDropdownId) {
                dropdown.closeDropdown();
            }
        });

        // Update activeDropdownId based on the toggled dropdown's state
        this.activeDropdownId = isOpen ? toggledDropdownId : null;
    }
}