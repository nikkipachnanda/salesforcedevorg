import { LightningElement,track } from 'lwc';
import myCommonStyles from '@salesforce/resourceUrl/global';
import { loadStyle } from 'lightning/platformResourceLoader';
export default class Tabsetdisabled extends LightningElement {
    constructor() {
        super();
        loadStyle(this, myCommonStyles)
            .then(result => {
                // Possibly do something when load is complete.
            });
         
    }

     activeTab = 'c';

    // Conditions (simulate with booleans or logic)
    conditionB = true;
    conditionC = false;

    get tabContainerClass() {
        let classes = 'tab';
        if (!this.conditionB) {
            classes += ' disabledtabB';
        }
        if (!this.conditionC) {
            classes += ' disabledtabC';
        }
        return classes;
    }

    handleActive(event) {
        const selected = event.target.value;
        alert("test" + selected);
        // Prevent tab B and C if conditions are not met
        if ((selected === 'b' && !this.conditionB) || (selected === 'c' && !this.conditionC)) {
            this.activeTab = this.activeTab; // Revert
            return;
        }

        this.activeTab = selected;
    }

    // You can call this method to update conditions based on logic
    updateConditions(bStatus, cStatus) {
        this.conditionB = bStatus;
        this.conditionC = cStatus;
    }
}