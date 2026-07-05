import { LightningElement } from 'lwc';
export default class Lifecycleparentcmp extends LightningElement {
    constructor(){
        super();
        console.log("constructor is called")
    }

    connectedCallback() {
         console.log("connected callback is called")
    }

    renderedCallback(){
       console.log("rendered callback is called")
    }
    
    name
    changeHandle(e) {
        this.name = e.target.value;
    }
}