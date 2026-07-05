import { LightningElement } from 'lwc';
export default class LifeCycleChildCmp extends LightningElement {
       constructor(){
        super();
        console.log("child constructor is called")
    }

    connectedCallback() {
         console.log("child connected callback is called")
    }

    renderedCallback(){
       console.log("child rendered callback is called")
    }
}