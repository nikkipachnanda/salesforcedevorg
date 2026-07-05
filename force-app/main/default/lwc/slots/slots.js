import { LightningElement, track } from 'lwc';

export default class Slots extends LightningElement 
{
    
      
        constructor() {
            super();
        //  window.addEventListener('onload', this.onLoad.bind(this));
            console.log("child constructor is called.");
            
        }

    connectedCallback()
        {
            console.log("child connected callback is called");
        }
        renderedCallback() {

            console.log("child renderedcallback is called.");
            
        }
    
}