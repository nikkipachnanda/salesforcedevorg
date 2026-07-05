import { LightningElement, api, track } from 'lwc';

export default class ChildTooltip extends LightningElement {
    @api text; // Tooltip text
    @api isVisible = false; // Property to control visibility from parent
    @api label; // Button label
    @api tooltipId; // ID of the tooltip
    @track internalVisibility = false; // Track internal toggle state

    get isTooltipVisible() {
        return this.isVisible || this.internalVisibility;
    }

    handleButtonClick(event) {
        event.stopPropagation();
        // Dispatch event to notify parent component about the click
        this.dispatchEvent(new CustomEvent('linkclick', {
            detail: this.tooltipId // Pass the ID to the parent
        }));
    }

    // @api
    // closeTooltip() {
    //     this.internalVisibility = false;
    // }

    // connectedCallback() {
    //     document.addEventListener('click', this.handleDocumentClick);
    // }

    // disconnectedCallback() {
    //     document.removeEventListener('click', this.handleDocumentClick);
    // }

    // handleDocumentClick = (event) => {
    //     try {
    //         // Check if the event target is not within the tooltip's template
    //         if (this.template && !this.template.contains(event.target)) {
    //             this.closeTooltip();
    //         }
    //     } catch (error) {
    //         console.error('Error in handleDocumentClick:', error);
    //     }
    // }
}