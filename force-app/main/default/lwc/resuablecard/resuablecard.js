import { LightningElement, api } from 'lwc';
   
export default class ReusableCard extends LightningElement {
    @api title;
    @api subtitle;
    @api buttonLabel;
    @api showButton = false;
    @api backgroundColor = '#ffffff';
    @api textColor = '#000000';

    get computedStyle() {
        return `background-color: ${this.backgroundColor}; color: ${this.textColor}; padding: 1rem; border-radius: 0.5rem`;
    }

    handleClick() {
        const event = new CustomEvent('cardbuttonclick');
        this.dispatchEvent(event);
    }


}