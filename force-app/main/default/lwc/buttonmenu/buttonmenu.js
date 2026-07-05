import { LightningElement, api } from 'lwc';
export default class Buttonmenu extends LightningElement {

    // displayMenu = false;

    // connectedCallback() {
    //     document.addEventListener('click', this.handleDocumentClick);
    //     this.template.addEventListener('menuToggle', this.handleMenuToggle);
    // }

    // disconnectedCallback() {
    //     document.removeEventListener('click', this.handleDocumentClick);
    //     this.template.removeEventListener('menuToggle', this.handleMenuToggle);
    // }

    // handleDocumentClick = (event) => {
    //     if (this.displayMenu && !this.template.contains(event.target)) {
    //         this.displayMenu = false;
    //     }
    // }

    // handleMenuToggle = (event) => {
    //     if (this.displayMenu && event.target !== this) {
    //         this.displayMenu = false;
    //     }
    // }

    // onToggle(e) {
    //     e.stopPropagation();
    //     this.displayMenu = !this.displayMenu;
    //     if (this.displayMenu) {
    //         this.dispatchEvent(new CustomEvent('menuToggle', { bubbles: true, composed: true }));
    //     }
    // }

       @api isOpen = false;

    connectedCallback() {
        document.addEventListener('click', this.handleDocumentClick);
        this.template.addEventListener('open', this.handleMenuToggle);
    }

    disconnectedCallback() {
        document.removeEventListener('click', this.handleDocumentClick);
        this.template.removeEventListener('open', this.handleMenuToggle);
    }

    @api
    toggleMenu(e) {
        e.stopPropagation();
        this.isOpen ? this.closeMenu() : this.openMenu();
    }

    @api
    openMenu() {
        this.isOpen = true;
        this.dispatchEvent(new CustomEvent('open', { bubbles: true, composed: true }));
    }

    @api
    closeMenu() {
        this.isOpen = false;
    }

    handleMenuToggle = (event) => {
        if (this.isOpen && event.target !== this) {
            this.closeMenu();
        }
    }

    handleDocumentClick = (event) => {
        if (this.isOpen && !this.template.contains(event.target)) {
            this.closeMenu();
        }
    }
}