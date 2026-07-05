import { LightningElement } from 'lwc';
export default class Addremoveclassonfocus extends LightningElement {
     isFocused = false;

    get dynamicClass() {
        return `myDiv ${this.isFocused ? 'is-focused' : ''}`;
    }

    handleFocus() {
        this.isFocused = true;
    }

    handleBlur() {
        this.isFocused = false;
    }
}