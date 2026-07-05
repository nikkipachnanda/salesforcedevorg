import { LightningElement, track } from 'lwc';
import myCommonStyles from '@salesforce/resourceUrl/tabfix';
import { loadStyle } from 'lightning/platformResourceLoader';

export default class Scrolltopsnd extends LightningElement {
    
    constructor() {
        super();
        loadStyle(this, myCommonStyles);
    }

    tabs = ['Back', 'Middle', 'Front'];
    @track currentTabIndex = 0;
    tabElement;

    connectedCallback() {
        window.addEventListener('scroll', this.handleScroll);
    }

    disconnectedCallback() {
        window.removeEventListener('scroll', this.handleScroll);
        this.removeFloatingTab();
    }

    get activeTab() {
        return this.tabs[this.currentTabIndex];
    }

    get isFirstTab() {
        return this.currentTabIndex === 0;
    }

    get isLastTab() {
        return this.currentTabIndex === this.tabs.length - 1;
    }

    nextTab() {
        if (!this.isLastTab) {
            this.currentTabIndex++;
            this.updateTabUI();
        }
    }

    previousTab() {
        if (!this.isFirstTab) {
            this.currentTabIndex--;
            this.updateTabUI();
        }
    }

    updateTabUI() {
        setTimeout(() => {
            this.handleScroll();
            this.updateFloatingTabText();
        }, 50);
    }

    handleScroll = () => {
        const tabset = this.template.querySelector('lightning-tabset');
        if (!tabset) return;

        const topOffset = tabset.getBoundingClientRect().top;

        if (topOffset <= 0) {
            if (!this.tabElement) {
                this.createFloatingTab();
            }
            this.updateFloatingTabText();
        } else {
            this.removeFloatingTab();
        }
    }

    createFloatingTab() {
        this.tabElement = document.createElement('div');
        this.tabElement.classList.add('floatHead');
        this.tabElement.textContent = this.activeTab;

        document.body.appendChild(this.tabElement);
    }

    updateFloatingTabText() {
        if (this.tabElement) {
            this.tabElement.textContent = this.activeTab;
        }
    }

    removeFloatingTab() {
        if (this.tabElement && document.body.contains(this.tabElement)) {
            document.body.removeChild(this.tabElement);
            this.tabElement = null;
        }
    }
}