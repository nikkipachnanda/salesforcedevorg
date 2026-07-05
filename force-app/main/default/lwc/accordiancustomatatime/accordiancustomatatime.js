import { LightningElement, track } from 'lwc';

export default class Accordion extends LightningElement {
    // @track sections = [
    //     { id: '1', title: 'Section 1', content: 'Content for Section 1', isOpen: false, iconName: 'utility:chevronright' },
    //     { id: '2', title: 'Section 2', content: 'Content for Section 2', isOpen: false, iconName: 'utility:chevronright' },
    //     { id: '3', title: 'Section 3', content: 'Content for Section 3', isOpen: false, iconName: 'utility:chevronright' }
    // ];

    // handleToggle(event) {
    //     const sectionId = event.currentTarget.dataset.id;
    //     this.sections = this.sections.map(section => {
    //         const isOpen = section.id === sectionId ? !section.isOpen : false;
    //         return {
    //             ...section,
    //             isOpen: isOpen,
    //             iconName: isOpen ? 'utility:chevrondown' : 'utility:chevronright'
    //         };
    //     });
    // }


    @track sections = [
        { id: '1', title: 'Section 1', content: 'Content for Section 1', isOpen: false, iconName: 'utility:chevronright' },
        { id: '2', title: 'Section 2', content: 'Content for Section 2', isOpen: false, iconName: 'utility:chevronright' },
        { id: '3', title: 'Section 3', content: 'Content for Section 3', isOpen: false, iconName: 'utility:chevronright' }
    ];

    connectedCallback() {
        this.template.addEventListener('open', this.handleMenuOpen.bind(this));
    }

    handleToggle(event) {
         event.stopPropagation();
        const sectionId = event.currentTarget.dataset.id;
        this.sections = this.sections.map(section => {
            const isOpen = section.id === sectionId ? !section.isOpen : false;
            return {
                ...section,
                isOpen: isOpen,
                iconName: isOpen ? 'utility:chevrondown' : 'utility:chevronright'
            };
        });
          this.closeAllMenus();
    }

    handleMenuOpen(event) {
       
        const menuId = event.target.dataset.id;
        this.closeAllMenus(menuId);
    }

    closeAllMenus(exceptMenuId) {
        const buttonMenus = this.template.querySelectorAll('c-buttonmenu');
        buttonMenus.forEach(menu => {
            if (menu.dataset.id !== exceptMenuId) {
                menu.closeMenu();
            }
        });
    }
}