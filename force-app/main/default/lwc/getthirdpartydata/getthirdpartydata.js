import { LightningElement, wire, track } from 'lwc';
import fetchThirdPartyData from '@salesforce/apex/ThirdPartyDataController.fetchThirdPartyData';

export default class Getthirdpartydata extends LightningElement {
    @track thirdPartyData;
    @track error;
    @track thirdPartyDataFormatted;

    @wire(fetchThirdPartyData)
    wiredThirdPartyData({ error, data }) {
        
        debugger;
        if (data) {
             this.thirdPartyData = JSON.parse(data);
            console.log("data11"+ this.thirdPartyData);
            try {
                // Try to format the JSON for better readability (optional)
                this.thirdPartyDataFormatted = JSON.stringify(JSON.parse(data), null, 2);
            } catch (e) {
                this.thirdPartyDataFormatted = data; // If not valid JSON, just display as is
            }
            this.error = undefined;
        } else if (error) {
            this.error = error.body.message;
            this.thirdPartyData = undefined;
            this.thirdPartyDataFormatted = undefined;
        }
    }
}