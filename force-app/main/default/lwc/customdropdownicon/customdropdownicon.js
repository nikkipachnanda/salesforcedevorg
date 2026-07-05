import { LightningElement, track } from 'lwc';

export default class Customdropdownicon extends LightningElement {
    @track selectedMenuOption; // To hold the selected option's value
    @track isMenuOpen = false;

    options = [
        { label: 'Task priority', value: 'Task priority', staticChar: 'T' },
        { label: 'Mask due date', value: 'Mask due date', staticChar: 'M' },
    ];

    connectedCallback() {
        // Initialize the selected option with the first option's value
        this.selectedMenuOption = this.options[1].value;
        document.addEventListener('click', this.handleDocumentClick);
    }

    disconnectedCallback() {
        document.removeEventListener('click', this.handleDocumentClick);
    }

    toggleMenuDropdown = (e) => {
        e.stopPropagation();
        this.isMenuOpen = !this.isMenuOpen;
    };

    get selectedOptionFirstChar() {
        return this.selectedMenuOption.charAt(0);
    }

    handleMenuOptionClick(event) {
        this.selectedMenuOption = event.target.dataset.value; // Update selected option
        this.isMenuOpen = false; // Close dropdown
    }

    handleDocumentClick = (event) => {
        if (!this.template.querySelector('.custom-dropdown').contains(event.target)) {
            this.isMenuOpen = false; // Close dropdown when clicking outside
        }
    };

    get optionsWithClass() {
        return this.options.map(option => ({
            ...option,
            class: option.value === this.selectedMenuOption ? 'option active' : 'option',
            isSelected: option.value === this.selectedMenuOption, // Mark as selected
        }));
    }
}