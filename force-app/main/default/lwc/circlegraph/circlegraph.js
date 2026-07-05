import { LightningElement, api, track } from 'lwc';
export default class Circlegraph extends LightningElement {

    @track progress = 0;

    @api
    setProgress(percent) {
        this.progress = percent;
        const circle = this.template.querySelector('.progress-ring__circle');
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;

        const offset = circumference - (percent / 100) * circumference;
        circle.style.strokeDashoffset = offset;
    }

    renderedCallback() {
        // Set initial progress
        this.setProgress(55);
    }
}