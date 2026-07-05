import { LightningElement, track } from 'lwc';
export default class Closecomboonscroll extends LightningElement {
      @track isModalOpen = false;
    @track containerClass = 'scroll-container';
    @track value = '';
    @track comboboxHidden = false;

    scrollTimeout;

    options = [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' }
    ];

    openModal() {
        this.isModalOpen = true;
    }

    closeModal() {
        this.isModalOpen = false;
    }

    handleScroll() {
        this.resetCombobox();

        this.containerClass = 'scroll-container scrolling';
        clearTimeout(this.scrollTimeout);
        this.scrollTimeout = setTimeout(() => {
            this.containerClass = 'scroll-container';
        }, 200);
    }

    handleMouseDown(event) {
        const isCombo = event.target.closest('lightning-combobox');
        if (isCombo) return;

        this.resetCombobox();

        this.containerClass = 'scroll-container scrolling';
        clearTimeout(this.scrollTimeout);
        this.scrollTimeout = setTimeout(() => {
            this.containerClass = 'scroll-container';
        }, 200);
    }

    resetCombobox() {
        this.comboboxHidden = true;

        setTimeout(() => {
            this.comboboxHidden = false;
        }, 50);
    }

    handleChange(event) {
        this.value = event.detail.value;
    }

    get comboboxClass() {
        return this.comboboxHidden ? 'combo-hidden' : '';
    }


}