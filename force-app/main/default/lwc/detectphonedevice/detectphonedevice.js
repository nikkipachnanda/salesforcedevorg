import { LightningElement } from 'lwc';
import myCommonStyles from '@salesforce/resourceUrl/globalcc';
import { loadStyle } from 'lightning/platformResourceLoader';
export default class Detectphonedevice extends LightningElement {
    isIphone = false;
    isAndroid = false;

    constructor() {
        super();
        loadStyle(this, myCommonStyles)
            .then(result => {
                // Possibly do something when load is complete.
            });
         
    }

    connectedCallback() {
        this.detectDevice();
        
    }



    detectDevice() {
        const userAgent = navigator.userAgent.toLowerCase();

        this.isIphone = /iphone|ipad|ipod/.test(userAgent);
        this.isAndroid = /android/.test(userAgent);

        // You can now use this.isIphone and this.isAndroid in your component's logic
        console.log('Is iPhone:', this.isIphone);
        console.log('Is Android:', this.isAndroid);

        // You can also add CSS classes to the component's root element or the body
        if (this.isIphone) {
            document.body.classList.add('is-iphone');
           // alert("iphone");
        } else if (this.isAndroid) {
            document.body.classList.add('is-android');
        }
    }
}