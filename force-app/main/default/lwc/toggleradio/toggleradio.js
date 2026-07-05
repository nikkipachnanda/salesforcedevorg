import { LightningElement } from 'lwc';
export default class Toggleradio extends LightningElement {
         isToggleActive = true; // Default checked

    toggleBtn(event) {
        this.isToggleActive = event.target.checked;
    }

    get mayContainClass() {
        return this.isToggleActive ? 'grey' : 'grey bold';
    }

    get containClass() {
        return this.isToggleActive ? 'grey bold' : 'grey';
    }

}