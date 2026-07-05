import { LightningElement, api } from 'lwc';
export default class ProgressTooltip extends LightningElement {
    @api title;
    @api date;
    @api badges;
    @api status;
    @api dynamicClass;
}