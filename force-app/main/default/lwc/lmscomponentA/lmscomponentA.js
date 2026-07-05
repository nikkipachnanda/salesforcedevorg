import { LightningElement, wire } from 'lwc';
import SAMPLEMC from "@salesforce/messageChannel/messageChannel__c"
import {MessageContext, publish} from 'lightning/messageService'
export default class LmscomponentA extends LightningElement {
    inputValue

    @wire(MessageContext)
    context

    inputHandler(event){
        this.inputValue = event.target.value
    }

    publishMessage(){
        const payload={
                message:this.inputValue
        }
        //publish(messageContext, messageChannel, message)
        publish(this.context, SAMPLEMC, payload)
    }
}