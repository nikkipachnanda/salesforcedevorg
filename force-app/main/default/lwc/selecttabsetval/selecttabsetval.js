import { LightningElement } from 'lwc';
export default class Selecttabsetval extends LightningElement {

 selectedTab = 'backdoor';

    tabs = ['backdoor', 'middledoor', 'frontdoor'];

    handleTabChange(event) {
        this.selectedTab = event.detail.value; // ✅ This works when using `value=`
        console.log('Tab switched to:', this.selectedTab);
    }

    goToNextTab() {
        const currentIndex = this.tabs.indexOf(this.selectedTab);
        if (currentIndex < this.tabs.length - 1) {
            this.selectedTab = this.tabs[currentIndex + 1];
        }
    }

    goToPreviousTab() {
        const currentIndex = this.tabs.indexOf(this.selectedTab);
        if (currentIndex > 0) {
            this.selectedTab = this.tabs[currentIndex - 1];
        }
    }

}