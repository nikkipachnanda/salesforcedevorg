import { LightningElement } from 'lwc';
export default class Zoomdetectcmp extends LightningElement {
  isZoomed = false;
    resizeHandler; // holds the bound function

    connectedCallback() {
        this.resizeHandler = this.detectZoom.bind(this);
        this.detectZoom(); // initial detection
        window.addEventListener('resize', this.resizeHandler);
    }

    disconnectedCallback() {
        window.removeEventListener('resize', this.resizeHandler);
    }

    detectZoom() {
        const zoomRatio = window.innerWidth / window.screen.width;
        console.log('Zoom Ratio:', zoomRatio.toFixed(2));

        // Set threshold for when to consider it zoomed in
        this.isZoomed = zoomRatio < 0.95;
    }

    get containerClass() {
        return this.isZoomed ? 'zoomed-background' : 'normal-background';
    }

}