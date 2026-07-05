import { LightningElement } from 'lwc';
export default class Carousalcmp extends LightningElement {
     items = [
       { id: 1, label: 'Item 1' },
       { id: 2, label: 'Item 2' },
       { id: 3, label: 'Item 3' },
       { id: 4, label: 'Item 4' },
       { id: 5, label: 'Item 5' },
       { id: 6, label: 'Item 6' },
       { id: 7, label: 'Item 7' },
       { id: 8, label: 'Item 8' }
   ];
    scrollLeft() {
        const container = this.template.querySelector('[data-id="scrollable"]');
        if (container) {
            container.scrollLeft -= 200; // Scrolls left by 200 pixels
        }
    }

    scrollRight() {
        const container = this.template.querySelector('[data-id="scrollable"]');
        if (container) {
            container.scrollLeft += 200; // Scrolls right by 200 pixels
        }
    }
}