import { LightningElement, api, track } from 'lwc';

export default class Tooltipcomponentctop extends LightningElement {
    @api dropdownId; // Unique identifier for this dropdown
    @api options = []; // Options passed from the parent component
    @track isOpen = false; // Track the dropdown's open/closed state
    @track selectedOption = ''; // Track selected option

    // Getter for the toggle icon
    get toggleIcon() {
        return this.isOpen  
            ? 'utility:chevronup' 
            : 'utility:chevrondown';
    }

    toggleDropdown(e) {
        e.preventDefault();
        const toggleEvent = new CustomEvent('toggledropdown', {
            detail: { dropdownId: this.dropdownId }
        });
        this.dispatchEvent(toggleEvent);

        this.isOpen = !this.isOpen;
    }

    handleOptionClick(event) {
        this.selectedOption = event.target.dataset.value;
        this.isOpen = false; // Close the dropdown after selecting an option
    }

    connectedCallback() {
        document.addEventListener('click', this.handleDocumentClick);
    }

    disconnectedCallback() {
        document.removeEventListener('click', this.handleDocumentClick);
    }

    @api
    closeDropdown() {
        this.isOpen = false; // Method to close the dropdown
    }

   handleDocumentClick = (event) => {
    // Check if the event target is a valid Node
    if (event.target && event.target.nodeType === Node.ELEMENT_NODE) {
        // Close the dropdown if the click is outside of the component
        if (!this.template.contains(event.target)) {
            this.isOpen = false;
        }
    }
};

}