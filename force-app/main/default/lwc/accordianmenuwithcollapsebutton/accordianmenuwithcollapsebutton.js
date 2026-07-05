import { LightningElement, track  } from 'lwc';
export default class Accordianmenuwithcollapsebutton extends LightningElement {


     @track sections = [
        { id: '1', title: 'Section 1', content: 'Content for Section 1', isOpen: false, iconName: 'utility:chevronright' },
        { id: '2', title: 'Section 2', content: 'Content for Section 2', isOpen: false, iconName: 'utility:chevronright' },
        { id: '3', title: 'Section 3', content: 'Content for Section 3', isOpen: false, iconName: 'utility:chevronright' }
    ];

    @track menuStates = {};

    connectedCallback() {
        document.addEventListener('click', this.handleDocumentClick.bind(this));
    }

    disconnectedCallback() {
        document.removeEventListener('click', this.handleDocumentClick.bind(this));
    }

    handleToggle(event) {
        event.stopPropagation();
        const sectionId = event.currentTarget.dataset.id;
        this.toggleSection(sectionId);
    }

    handleCollapseSection(event) {
        event.stopPropagation();
        const sectionId = event.currentTarget.dataset.id;
        this.toggleSection(sectionId);
    }

    toggleSection(sectionId) {
        this.sections = this.sections.map(section => {
            const isOpen = section.id === sectionId ? !section.isOpen : section.isOpen;
            return {
                ...section,
                isOpen: isOpen,
                iconName: isOpen ? 'utility:chevrondown' : 'utility:chevronright'
            };
        });
        // Close all menus when an accordion section is toggled
        this.menuStates = {};
    }

    toggleMenu(event) {
        event.stopPropagation();
        const menuId = event.currentTarget.dataset.id;
        this.menuStates = {
            ...this.menuStates,
            [menuId]: !this.menuStates[menuId]
        };
        // Close all other menus
        this.closeOtherMenus(menuId);
    }

    closeOtherMenus(exceptMenuId) {
        const updatedMenuStates = { [exceptMenuId]: this.menuStates[exceptMenuId] };
        this.menuStates = updatedMenuStates;
    }

    handleDocumentClick(event) {
        const clickedOutside = !this.template.contains(event.target);
        if (clickedOutside) {
            this.menuStates = {};
        }
    }

    // Compute visibility of menus
    get sectionMenuStates() {
        return this.sections.map(section => ({
            ...section,
            isMenuOpen: this.menuStates[section.id] || false
        }));
    }


}