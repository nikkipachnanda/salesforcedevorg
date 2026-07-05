import { LightningElement } from 'lwc';

export default class Uibadgedynamic extends LightningElement {
    status = 'alert'; // Default status, change dynamically as needed

    get badgeClass() {
        const classes = {
            alert: 'alertInfo',
            info: 'blueInfoBadge',
            draft: 'draftInfoBadge',
            requireInfo: 'requireInfoBadge',
            success: 'successBadge'
        };

        // Combine static and dynamic classes
        return `alignH alignMiddle slds-m-right_small slds-p-horizontal_small slds-p-vertical_xx-small ${classes[this.status] || 'defaultBadge'}`;
    }

 get badgeIcon() {
        const icons = {
            alert: this.alert,       
            info: this.successBlack,  
            requireInfo: this.warning, 
            success: this.success     
        };
        return icons[this.status] || null;
    }

    get badgeText() {
        const texts = {
            alert: 'Unsuccessful',
            info: 'Information Provided',
            draft: 'Draft',
            requireInfo: 'Requires Information',
            success: 'Synced with SAP'
        };
        return texts[this.status] || '';
    }

    connectedCallback() {
        // Example: Change status dynamically (Fetch from API or user action)
        this.status = 'success'; // Modify to test different statuses
    }
}