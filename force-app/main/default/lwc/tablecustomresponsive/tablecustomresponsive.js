import { LightningElement, track } from 'lwc';
export default class Tablecustomresponsive extends LightningElement {
     @track data = [
        { id: 1, name: 'John', age: 30, city: 'New York' },
        { id: 2, name: 'Emma', age: 28, city: 'Los Angeles' }
    ];

    get isDesktop() {
        return window.innerWidth > 768; // Example breakpoint
    }
}