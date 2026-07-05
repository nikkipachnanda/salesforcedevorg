import { LightningElement } from 'lwc';
import GLOBAL_STYLE from '@salesforce/resourceUrl/globalstyle';

export default class Uiwrapper extends LightningElement
 {

    constructor() {
        super();
        
        let link = document.createElement("LINK");
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("type", "text/css");
        link.setAttribute("href", GLOBAL_STYLE);
        document.head.appendChild(link);
    }
 }