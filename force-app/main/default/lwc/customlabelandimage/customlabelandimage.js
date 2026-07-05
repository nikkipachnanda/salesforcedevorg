import { LightningElement, api } from 'lwc';
import bodylabel from '@salesforce/label/c.bodyinfo';
import testimglogo from '@salesforce/resourceUrl/testimglogo';

export default class Customlabelandimage extends LightningElement {

    @api label = {
        bodylabel,
        testimglogo
    }


}