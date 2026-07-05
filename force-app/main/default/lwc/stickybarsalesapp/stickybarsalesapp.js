import { LightningElement, track } from 'lwc';
export default class Stickybarsalesapp extends LightningElement {

     selectedDoor = 'backdoor';
    tempCheckTab = false;

    get selectedDoorLabel() {
        switch (this.selectedDoor) {
            case 'backdoor': return 'Backdoor';
            case 'middledoor': return 'Middledoor';
            case 'frontdoor': return 'Frontdoor';
            default: return 'None';
        }
    }

    handleTabChange(event) {
        const selectedTab = event.detail.tab;
        this.selectedDoor = selectedTab.name; // ✅ THIS IS THE FIX
        console.log('Tab changed to:', this.selectedDoor);
    }

    handleScroll = () => {
        const midCont = this.template.querySelector('.tabMidCont');
        if (midCont) {
            const midContTop = midCont.getBoundingClientRect().top + window.scrollY;
            this.tempCheckTab = window.scrollY > midContTop;
        }
    };

    connectedCallback() {
        window.addEventListener('scroll', this.handleScroll);
    }

    disconnectedCallback() {
        window.removeEventListener('scroll', this.handleScroll);
    }
}