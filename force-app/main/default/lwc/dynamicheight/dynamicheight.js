import { LightningElement, track } from 'lwc';
import myCommonStyles from '@salesforce/resourceUrl/globalcss';
import { loadStyle } from 'lightning/platformResourceLoader';

export default class Dynamicheight extends LightningElement {
    constructor() {
        super();
        loadStyle(this, myCommonStyles)
            .then(result => {
                // Possibly do something when load is complete.
            });
    }

    renderedCallback(){
         let dyheight =this.template.querySelectorAll(".wrapperOuterCont")[0].clientHeight;
       
           this.template.querySelectorAll(".wrapperOuterCont")[0].style.height = dyheight + "px";
    }
}