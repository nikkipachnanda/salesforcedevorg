import { LightningElement, track } from 'lwc';
import FORM_FACTOR from '@salesforce/client/formFactor';


export default class Conditionalcmp extends LightningElement {

@track dval = "desktop value";
    @track mval = "mobile value";
    @track viewData = true;
    @track formFactor = this.updateFormFactor();
    

    get isDesktop() {
        return  this.formFactor === 'Large' ;
    }

    get isMobile() {
        console.log("small");
        return  this.formFactor === 'Small';
    }

     get isTablet() {
        return   this.formFactor === 'Medium';
    }

    connectedCallback() {
       // this.updateFormFactor();
        this.formFactor = FORM_FACTOR;
        window.addEventListener('resize', this.updateFormFactor.bind(this));
    }

    disconnectedCallback() {
        window.removeEventListener('resize', this.updateFormFactor.bind(this));
    }

    updateFormFactor() {
        const width = window.innerWidth;
        if (width <= 600) {
            this.formFactor = 'Small';
        } else if (width > 600 && width <= 1024) {
            this.formFactor = 'Medium';
        } else {
            this.formFactor = 'Large';
        }
    }

    handleClick() {
        this.viewData = !this.viewData;
    }



}