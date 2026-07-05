import { LightningElement,api, track } from 'lwc';
export default class Commonaccordian extends LightningElement {
   @api title;
    @track isOpen = false;

    toggleSection() {
        this.isOpen = !this.isOpen;
    }

    get iconName() {
        return this.isOpen ? 'utility:chevronup' : 'utility:chevrondown';
    }
}