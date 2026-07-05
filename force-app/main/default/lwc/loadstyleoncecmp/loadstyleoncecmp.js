import { LightningElement } from 'lwc';
import myCommonStyle from '@salesforce/resourceUrl/commonstyle';
import pagelevelStyle from '@salesforce/resourceUrl/pagelevelstyle';
import { loadStyleOnce } from 'c/commonloadstylecmp'; // Path to your utility
export default class Loadstyleoncecmp extends LightningElement {

    // Flag to ensure CSS loading logic runs only once per component lifecycle
    initialized = false;

    connectedCallback() {
        if (this.initialized) {
            return;
        }
        this.initialized = true;

        this.loadCssFiles();
    }

    loadCssFiles() {
        // Load both CSS files using Promise.all to handle them concurrently
        Promise.all([
            // common.css should only load once across the whole page, regardless of the component calling it
            loadStyleOnce(this, myCommonStyle), 
            
            // pagelevel.css is also loaded once, per the logic in loadStyleOnce
            loadStyleOnce(this, pagelevelStyle) 
        ])
        .catch(error => {
            // Handle any error during the loading process
            console.error('One or more CSS files failed to load:', error);
        });
    }
}