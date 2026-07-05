import { LightningElement } from 'lwc';
export default class DynamicCss extends LightningElement {

    percent = 10;
    changeHandler(event) 
    {
      this.percent = event.target.value;
    }

    get percentage() {
        if (this.percent < 101){
        return `width:${this.percent}%`
    }
    }
}