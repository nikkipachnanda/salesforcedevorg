import { LightningElement,track } from 'lwc';
import myCommonStyles from '@salesforce/resourceUrl/commexcss';
import { loadStyle } from 'lightning/platformResourceLoader';
import commeximg from '@salesforce/resourceUrl/commeximg';

export default class Accordiancommex extends LightningElement {


    
    fruit = commeximg + '/fruit.png';
    veg = commeximg + '/veg.png';
    be = commeximg + '/be.png';
    ice = commeximg + '/ice.png';
    calendar = commeximg + '/calendar.svg';
    continueCta = commeximg + '/continueCta.svg';
    logo = commeximg + '/logo.svg';
    pic = commeximg + '/pic.jpg';
    search = commeximg + '/search.svg';
    menuIcon = commeximg + '/menu.svg';
    close = commeximg + '/close.svg';
    info = commeximg + '/info.svg';
    alert = commeximg + '/alert.svg';
    warning = commeximg + '/warning.svg';
    success = commeximg + '/success.svg';
    step1 = commeximg + '/step1.png';
    step2 = commeximg + '/step2.png';
    step3 = commeximg + '/step3.png';
    step4 = commeximg + '/step4.png';
    complete = commeximg + '/complete.svg';
    sort = commeximg + '/sort.svg';
    copy = commeximg + '/copy.svg';
    preview = commeximg + '/preview.svg';
    moreaction = commeximg + '/more-actions.svg';
    copy = commeximg + '/copy.svg';
    preview = commeximg + '/preview.svg';
    addDetail = commeximg + '/add-detail.svg';
    remove = commeximg + '/remove.svg';

       constructor() {
        super();
        loadStyle(this, myCommonStyles)
            .then(result => {
                // Possibly do something when load is complete.
            });
    }
    
     @track sections = [
        { id: '1', title: 'Notice of upcoming review - small suppliers', content: 'Content for Section 1', isOpen: false, iconName: 'utility:chevronright' },
        { id: '2', title: 'Notice of upcoming review - local suppliers', content: 'Content for Section 2', isOpen: false, iconName: 'utility:chevronright' },
        { id: '3', title: 'Notice of upcoming review - large suppliers', content: 'Content for Section 3', isOpen: false, iconName: 'utility:chevronright' }
    ];

    @track menuStates = {};

    connectedCallback() {
        document.addEventListener('click', this.handleDocumentClick.bind(this));
    }

    disconnectedCallback() {
        document.removeEventListener('click', this.handleDocumentClick.bind(this));
    }

    get hasSections() {
        return Array.isArray(this.sections) && this.sections.length > 0;
    }

    get enrichedSections() {
        if (!this.hasSections) {
            return [];
        }

        return this.sections.map(section => ({
            ...section,
            isMenuOpen: !!this.menuStates[section.id]
        }));
    }

    handleToggle(event) {
        event.stopPropagation();
        const sectionId = event.currentTarget.dataset.id;
        // this.sections = this.sections.map(section => {
        //     const isOpen = section.id === sectionId ? !section.isOpen : section.isOpen;
        //     return {
        //         ...section,
        //         isOpen: isOpen,
        //         iconName: isOpen ? 'utility:chevrondown' : 'utility:chevronright'
        //     };
        // });
        // this.menuStates = {}; // Close all menus when an accordion section is toggled
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



}