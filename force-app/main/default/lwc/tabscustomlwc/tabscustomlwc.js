import { LightningElement, track } from 'lwc';
export default class Tabscustomlwc extends LightningElement {
    
     activeTab = 'tab1';

    tabs = []; // ✅ Make sure it's defined before template runs

    connectedCallback() {
        // ✅ Initialize tab list safely inside connectedCallback
        this.tabs = [
            { id: 'tab1', label: 'Tab One', class: 'slds-tabs_default__link slds-tabs_default__link--active' },
            { id: 'tab2', label: 'Tab Two', class: 'slds-tabs_default__link' },
            { id: 'tab3', label: 'Tab Three', class: 'slds-tabs_default__link' }
        ];
    }

    get isTab1() {
        return this.activeTab === 'tab1';
    }
    get isTab2() {
        return this.activeTab === 'tab2';
    }
    get isTab3() {
        return this.activeTab === 'tab3';
    }

    handleTabClick(event) {
        const selectedId = event.currentTarget.dataset.id;
        this.activeTab = selectedId;

        // Update active tab CSS
        this.tabs = this.tabs.map(tab => ({
            ...tab,
            class:
                tab.id === selectedId
                    ? 'slds-tabs_default__link slds-tabs_default__link--active'
                    : 'slds-tabs_default__link'
        }));
    }


}