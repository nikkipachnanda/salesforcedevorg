import { LightningElement, api } from 'lwc';
export default class ChildReceivePrimitive extends LightningElement {
    @api message
    @api cardHeading
    @api number
    @api isValid

}