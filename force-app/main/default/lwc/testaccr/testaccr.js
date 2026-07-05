import { LightningElement, track } from 'lwc';

import myCommonStyles from '@salesforce/resourceUrl/commexcss';
import { loadStyle } from 'lightning/platformResourceLoader';

export default class Testaccr extends LightningElement {

    
       constructor() {
        super();
        loadStyle(this, myCommonStyles)
            .then(result => {
                // Possibly do something when load is complete.
            });
    }

     accordionData = [
        {
            id: '1',
            icon: '/path/to/bluetick.png',
            title: 'Initial',
            dateInfo: 'Sent by Jane Doe | 18/04/24 4:30PM',
            description: 'Supplier has been notified of an upcoming range review',
            showButton: true,
            hasTable: true,
            recipients: [
                { name: 'Jenny Wilson', email: 'jwislon@test.com', role: 'Supplier representative', hasError: false },
                // More recipients...
            ],
            showError: false
        },
      
        {
            id: '2',
            icon: '/path/to/graytick.png',
            title: 'Final (C Prefix)',
            dateInfo: 'No email sent',
            description: 'Supplier has been informed of a final decision regarding their affected articles',
            showButton: true,
            hasTable: true,
            recipients: [
                { name: 'Jenny Wilson', email: 'jwislon@test.com', role: 'Supplier representative', hasError: true, errorMsg: 'Contact not found' },
                // More recipients...
            ],
            showError: true
        }
    ];

       handleAccordionClick(event) {
    // Check if the clicked element has the class 'accArrow' or is a descendant of 'accArrow'
    const accArrow = event.target.closest('.accArrow');
    if (!accArrow) {
        return;
    }

    const header = accArrow.closest('[data-accordion="header"]');
    const currentExpandedSection = header.nextElementSibling;
    const isExpanded = !currentExpandedSection.classList.contains('slds-hide');

    // Toggle the current section
    if (isExpanded) {
        currentExpandedSection.classList.add('slds-hide');
        accArrow.classList.remove('rotate');
        header.classList.remove('activeHeadRowWB');
    } else {
        currentExpandedSection.classList.remove('slds-hide');
        accArrow.classList.add('rotate');
        header.classList.add('activeHeadRowWB');
    }
}

renderedCallback() {
        this.template.querySelectorAll('[data-accordion="header"]').forEach(header => {
            const accArrow = header.querySelector('.accArrow');
            if (accArrow) {
                accArrow.addEventListener('click', this.handleAccordionClick.bind(this));
            }

            const currentExpandedSection = header.nextElementSibling;
            if (!currentExpandedSection.classList.contains('slds-hide')) {
                if (accArrow) {
                    accArrow.classList.add('rotate');
                }
                header.classList.add('activeHeadRowWB');
            }
        });
    }


}