import { LightningElement } from 'lwc';
export default class ChildToParentThroughEvent extends LightningElement {
    closeHandler() 
    {
        const myEvent = new CustomEvent('close',{
        detail:{
            msg:"Modal Closed Successfully"
        }});
        this.dispatchEvent(myEvent);
    }
}