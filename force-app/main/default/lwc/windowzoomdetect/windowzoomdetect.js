import { LightningElement, track } from 'lwc';

export default class Windowzoomdetect extends LightningElement {
    @track zoomLevel = 1;
    @track zoomClass = 'zoom-level-100'; // Default class

    connectedCallback() {
        this.detectZoom();
        window.addEventListener('resize', this.detectZoom.bind(this));
    }

    // Detect Zoom Level
    detectZoom() {
        const newZoomLevel = window.devicePixelRatio;
        if (this.zoomLevel !== newZoomLevel) {
            this.zoomLevel = newZoomLevel;
            console.log("zoom level changed to " + this.zoomLevel);

            // Conditional logic for zoomClass
            if (Math.abs(this.zoomLevel - 1.5) < 0.05) { // Approximately 100%
                this.zoomClass = 'zoom-level-100';
            } else if (Math.abs(this.zoomLevel - 1.35) < 0.05) { // Approximately 90%
                this.zoomClass = 'zoom-level-90';
            } else if (Math.abs(this.zoomLevel - 1.2) < 0.05) { // Approximately 80%
                this.zoomClass = 'zoom-level-80';
            } else if (Math.abs(this.zoomLevel - 1.1) < 0.05) { // Approximately 75%
                this.zoomClass = 'zoom-level-70';
            } else {
                this.zoomClass = ''; // Or a default class if none match
            }
        }
    }

    disconnectedCallback() {
        window.removeEventListener('resize', this.detectZoom.bind(this));
    }
}