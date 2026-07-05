import { LightningElement } from 'lwc';
export default class ParentToChildThroughAction extends LightningElement {
    percentage = 10;

    changeHandler(e) {
  
        this.percentage = e.target.value;
    }
}