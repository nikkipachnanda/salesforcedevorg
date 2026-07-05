import { LightningElement, api, track, wire } from 'lwc';
import { publish, MessageContext, subscribe, unsubscribe } from 'lightning/messageService';
import TOOLTIP_CHANNEL from '@salesforce/messageChannel/lmsTooltipChannel__c';

export default class TooltipComponent extends LightningElement {
    @api tooltipId; // Unique identifier for this tooltip
    @track showTooltip = false; // Start with tooltip hidden
    subscription = null;

    get toggleIcon() {
        return this.showTooltip 
            ? 'utility:chevronup' // Icon when tooltip is open
            : 'utility:chevrondown'; // Icon when tooltip is closed
    }

    @wire(MessageContext)
    messageContext;

    connectedCallback() {
        this.subscribeToMessageChannel();
    }

    disconnectedCallback() {
        this.unsubscribeFromMessageChannel();
    }

    subscribeToMessageChannel() {
        if (!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                TOOLTIP_CHANNEL,
                (message) => this.handleMessage(message)
            );
        }
    }

    unsubscribeFromMessageChannel() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }

    handleMessage(message) {
        // Close this tooltip if the message is sent by another tooltip
        if (message.tooltipId !== this.tooltipId) {
            this.showTooltip = false;
        }
    }

    toggleTooltip() {
        // Always publish a message before toggling to close all other tooltips
        publish(this.messageContext, TOOLTIP_CHANNEL, { tooltipId: this.tooltipId });

        // Toggle the current tooltip's visibility
        this.showTooltip = !this.showTooltip;
    }
}