import { LightningElement, api } from 'lwc';
export default class Reusablecolorbox extends LightningElement {
  @api color = 'green';

    get computedClass() {
        return `color-box ${this.colorClass}`;
    }

    get colorClass() {
        if (this.color === 'pink') {
            return 'pink-box';
        } else if (this.color === 'white') {
            return 'white-box';
        } else {
            return 'green-box';
        }
    }
}