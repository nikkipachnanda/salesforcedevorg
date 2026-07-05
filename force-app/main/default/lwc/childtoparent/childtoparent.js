import { LightningElement } from 'lwc';
export default class Childtoparent extends LightningElement {

    childToParent() 
    {
        const childEvent = new CustomEvent('buttonclick');
        this.dispatchEvent(childEvent);
    }
}