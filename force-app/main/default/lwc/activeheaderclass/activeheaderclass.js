import { LightningElement, track } from 'lwc';
export default class Activeheaderclass extends LightningElement {
     @track activeTab = 'home';

    get homeClass() {
        return this.activeTab === 'home' ? 'active' : '';
    }

    get aboutClass() {
        return this.activeTab === 'about' ? 'active' : '';
    }

    get contactClass() {
        return this.activeTab === 'contact' ? 'active' : '';
    }

    handleNavClick(event) {
        this.activeTab = event.target.dataset.target;
    }
}