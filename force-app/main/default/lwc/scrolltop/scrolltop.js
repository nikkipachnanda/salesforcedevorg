import { LightningElement, track } from 'lwc';

export default class Scrolltop extends LightningElement {
    @track selectedDoor = 'backdoor';
    @track showStickyLabel = false;

    lastScrollY = 0;
    scrollerRef;

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
        this.selectedDoor = selectedTab.name;
    }

    handleScroll = () => {
        const currentScrollY = this.scrollerRef?.scrollTop || 0;

        if (currentScrollY > this.lastScrollY + 10) {
            this.showStickyLabel = false; // Scrolling down
        } else if (currentScrollY < this.lastScrollY - 10) {
            this.showStickyLabel = true; // Scrolling up
        }

        this.lastScrollY = currentScrollY;
    };

    connectedCallback() {
        setTimeout(() => {
            try {
                const host = this.template.host;
                const outerHost = host.getRootNode().host;
                const pageRoot = outerHost?.getRootNode?.();
                const scroller = pageRoot?.querySelector?.(
                    '.oneContent, .flexipage, [class*="scroll"], [class*="container"]'
                );

                if (scroller) {
                    this.scrollerRef = scroller;
                    scroller.addEventListener('scroll', this.handleScroll);
                } else {
                    console.warn('⚠️ Scrollable container not found.');
                }
            } catch (err) {
                console.error('❌ Scroll setup failed:', err);
            }
        }, 500);
    }

    disconnectedCallback() {
        if (this.scrollerRef) {
            this.scrollerRef.removeEventListener('scroll', this.handleScroll);
        }
    }
}