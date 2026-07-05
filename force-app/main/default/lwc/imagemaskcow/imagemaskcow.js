import { LightningElement } from 'lwc';
import cowimg from '@salesforce/resourceUrl/cowimg';

export default class Imagemaskcow extends LightningElement {
    cow = cowimg + '/animal2.svg';
    beef = cowimg + '/beef.jpg';
    brisk = cowimg + '/brisket.jpg';
    rump = cowimg + '/rump.jpeg';

    // Default values for active part
    partName = 'Brisket';
    partContent = 'Beef brisket is a flavorful and tender cut of meat that comes from the lower chest or breast of the animal';
    partImage = this.brisk;
    activePart = 'Brisket'; // Set Brisket as the active part by default

    // Method to handle mouse over event
    handleMouseOver(event) {
        this.partName = event.target.getAttribute('data-name');
        this.partContent = event.target.getAttribute('data-content');
        this.partImage = event.target.getAttribute('data-image');
        this.activePart = event.target.getAttribute('data-name'); // Set the current part as active
    }

    // Method to handle mouse leave event
    handleMouseLeave() {
        this.partName = 'Brisket';
        this.partContent = 'Beef brisket is a flavorful and tender cut of meat that comes from the lower chest or breast of the animal.';
        this.partImage = this.brisk;
        this.activePart = 'Brisket'; // Reset to default active part
    }

    // Computed classes for each part
    get headClass() {
        return this.activePart === 'Short Plate' ? 'part head active' : 'part head';
    }

    get chuckClass() {
        return this.activePart === 'Brisket' ? 'part chuck active' : 'part chuck';
    }

    get ribClass() {
        return this.activePart === 'Flank' ? 'part rib active' : 'part rib';
    }
}