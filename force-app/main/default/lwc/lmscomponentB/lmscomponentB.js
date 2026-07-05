import { LightningElement, wire } from 'lwc';
import SAMPLEMC from "@salesforce/messageChannel/messageChannel__c"
import {subscribe, MessageContext, APPLICATION_SCOPE, unsubscribe} from 'lightning/messageService';
export default class LmscomponentB extends LightningElement {
    receivedMessage;

    @wire(MessageContext)
    context;

    // Subscribe to the message channel when the component is connected
    connectedCallback() {
        this.subscribeToMessageChannel();
    }

    subscribeToMessageChannel() {
        // Subscribe to the message channel
        this.subscription = subscribe(
            this.context,
            SAMPLEMC,
            (message) => this.handleMessage(message),
            {scope:APPLICATION_SCOPE}
        );
    }

    handleMessage(message) {
        // Handle the received message
            console.log('Received1111 message:', message);

        this.receivedMessage =  message.message;
    }
}