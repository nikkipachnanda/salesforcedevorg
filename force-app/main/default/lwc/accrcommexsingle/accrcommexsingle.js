import { LightningElement, track } from 'lwc';
import myCommonStyles from '@salesforce/resourceUrl/commexcss';
import { loadStyle } from 'lightning/platformResourceLoader';
import commeximg from '@salesforce/resourceUrl/commeximg';

export default class Accrcommexsingle extends LightningElement {
    alert = commeximg + '/alert.svg';

    
       constructor() {
        super();
        loadStyle(this, myCommonStyles)
            .then(result => {
                // Possibly do something when load is complete.
            });
    }

    @track accordionData = [
        {
            id: '1',
            title: 'Notice of upcoming review - small suppliers',
            icon: commeximg + '/blueTick.svg',
            dateInfo: '12/08/2024',
            description: 'Small suppliers review',
            showButton: true,
            hasTable: true,
            showError: false,
            isOpen: false, // Add this property
            recipients: [
                { name: 'John Doe', email: 'john@example.com', role: 'Manager', hasError: false }
            ]
        },
        {
            id: '2',
            title: 'Notice of upcoming review - local suppliers',
            icon: commeximg + '/blueTick.svg',
            dateInfo: '14/08/2024',
            description: 'Local suppliers review',
            showButton: false,
            hasTable: true,
            showError: true,
            isOpen: false, // Add this property
            recipients: [
                { name: 'Jane Doe', email: 'jane@example.com', role: 'Supervisor', hasError: true, errorMsg: 'Invalid email' }
            ]
        },
        {
            id: '3',
            title: 'Notice of upcoming review - large suppliers',
            icon: commeximg + '/blueTick.svg',
            dateInfo: '16/08/2024',
            description: 'Large suppliers review',
            showButton: true,
            hasTable: false,
            showError: false,
            isOpen: false, // Add this property
            recipients: []
        }
    ];

    // Compute icon name and class for each accordion
    get computedAccordionData() {
        return this.accordionData.map(acc => ({
            ...acc,
            iconName: acc.isOpen ? 'utility:chevrondown' : 'utility:chevronright',
            accordionClass: acc.isOpen ? 'accordionExpandedSec' : 'accordionExpandedSec slds-hide'
        }));
    }

    handleToggle(event) {
        const sectionId = event.currentTarget.dataset.id;
        this.accordionData = this.accordionData.map(acc => {
            if (acc.id === sectionId) {
                acc.isOpen = !acc.isOpen;
            } else {
                acc.isOpen = false; // Close other sections if needed
            }
            return acc;
        });
    }
}