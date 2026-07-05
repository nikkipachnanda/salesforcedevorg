import { LightningElement, track, api } from 'lwc';
import myCommonStyles from '@salesforce/resourceUrl/idiat';
import { loadStyle } from 'lightning/platformResourceLoader';
export default class Accordianstatic extends LightningElement {

     constructor() {
        super();
        loadStyle(this, myCommonStyles)
            .then(result => {
                // Possibly do something when load is complete.
            });
    }

    //Accordian script
     @track isSectionFSAccordionOpen = true; // State for Article Identity and Classification accordion
   @track isSectionSSAccordionOpen = true; // State for Product and Image Source accordion

  // Getters for icon names
  get sectionFSIconName() {
    return this.isSectionFSAccordionOpen ? 'utility:chevronup' : 'utility:chevrondown';
  }

  get sectionSSIconName() {
    return this.isSectionSSAccordionOpen ? 'utility:chevronup' : 'utility:chevrondown';
  }

  // Toggle methods for each accordion section
  sectionFSAccordion() {
    this.isSectionFSAccordionOpen = !this.isSectionFSAccordionOpen;
  }

  sectionSSAccordion() {
    this.isSectionSSAccordionOpen = !this.isSectionSSAccordionOpen;
  }

}