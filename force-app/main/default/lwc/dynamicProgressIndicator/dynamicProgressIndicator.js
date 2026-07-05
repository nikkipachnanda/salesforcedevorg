import { LightningElement, api } from 'lwc';
export default class DynamicProgressIndicator extends LightningElement {
     @api currentStep = '2';

    progressSteps = [
        {
            value: '1',
            boxClass: 'greenIndBox',
            stepClass: 'greenTick',
            tooltipTitle: 'Initial',
            tooltipDate: '10 Sep 2025',
            badges: [{ id: 1, label: 'CM' }, { id: 2, label: 'ACM' }, { id: 3, label: 'CA' }],
            tooltipClass: 'green'
        },
        {
            value: '2',
            boxClass: 'redIndBox slds-is-relative',
            stepClass: '',
            tooltipTitle: 'Probable',
            tooltipDate: '24 Jul 2025',
            badges: [{ id: 1, label: 'CM' }, { id: 2, label: 'ACM' }, { id: 3, label: 'CA' }],
            status: 'Overdue',
            tooltipClass: 'red'
        },
        {
            value: '3',
            boxClass: 'purpleIndBox slds-is-relative',
            stepClass: '',
            tooltipTitle: 'Interim final',
            tooltipDate: '24 Sep 2025',
            badges: [{ id: 1, label: 'CM' }, { id: 2, label: 'ACM' }, { id: 3, label: 'CA' }],
            tooltipClass: 'purple'
        },
        {
            value: '4',
            boxClass: 'greyIndBox slds-is-relative',
            stepClass: '',
            tooltipTitle: 'Final',
            tooltipDate: '24 Sep 2025',
            badges: [{ id: 1, label: 'CM' }, { id: 2, label: 'ACM' }, { id: 3, label: 'CA' }],
            tooltipClass: 'grey'
        }
    ];

    handleClick() {
        // Handle the "View all" button click
        console.log('View all clicked');
    }
}