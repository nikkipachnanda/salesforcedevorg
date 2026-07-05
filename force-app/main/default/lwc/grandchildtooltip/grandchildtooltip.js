import { LightningElement, api, track } from 'lwc';

export default class GrandchildTooltip extends LightningElement {
   @api isTooltipOpen = false;

    handleToggleTooltip() {
        this.isTooltipOpen = !this.isTooltipOpen;
        this.dispatchEvent(new CustomEvent('toggletooltip'));
    }
}