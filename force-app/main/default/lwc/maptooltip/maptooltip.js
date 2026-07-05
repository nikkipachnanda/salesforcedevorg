import { LightningElement, track } from 'lwc';
import { loadStyle } from 'lightning/platformResourceLoader';
import mapimg from '@salesforce/resourceUrl/mapimg';
export default class Maptooltip extends LightningElement {

        map = mapimg + '/map.png'; 
        location = mapimg + '/location.png'; 


    @track isLocationOne = false; // Tooltip state for the first location
    @track isLocationTwo = false; // Tooltip state for the second location
    @track isLocationThree = false; 
    @track isLocationFourth = false; 
    @track isLocationFifth = false; 
    @track isLocationSix = false; 
    @track isLocationSeven = false; 
    // Handle hover for Location One
    handleMouseOverOne() {
        this.isLocationOne = true;
    }

    // Handle hover for Location Two
    handleMouseOverTwo() {
        this.isLocationTwo = true;
    }

    handleMouseOverTh() {
        this.isLocationThree = true;
    }

    handleMouseOverFourth() {
        this.isLocationFourth = true;
    }

    handleMouseOverFifth() {
        this.isLocationFifth = true;
    }

     handleMouseOverSix() {
        this.isLocationSix = true;
    }

     handleMouseOverSeven() {
        this.isLocationSeven = true;
    }


    

    // Handle mouse out (reset tooltips)
    handleMouseOut() {
        this.isLocationOne = false;
        this.isLocationTwo = false;
        this.isLocationThree = false;
        this.isLocationFourth = false;
        this.isLocationFifth = false;
        this.isLocationSix = false;
        this.isLocationSeven = false;
    }
         


}