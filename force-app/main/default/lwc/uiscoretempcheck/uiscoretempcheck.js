import { LightningElement,track } from 'lwc';
import myCommonStyles from '@salesforce/resourceUrl/scoretempA';
import { loadStyle } from 'lightning/platformResourceLoader';
import scoretempimg from '@salesforce/resourceUrl/scoretempimg';
export default class Uiscoretempcheck extends LightningElement {
      constructor() {
        super();
        loadStyle(this, myCommonStyles)
            .then(result => {
                // Possibly do something when load is complete.
            });
         
    }

    success = scoretempimg + '/success.svg';
    tempcheck = scoretempimg + '/tempcheck.png';
    fruit = scoretempimg + '/fruit.svg';
    emptyContainer = scoretempimg + '/emptyContainer.svg';


    @track showHiddenItems = true;

    toggleHidden() {
        this.showHiddenItems = !this.showHiddenItems;
    }

    get iconName() {
        return this.showHiddenItems ? 'utility:chevronup' : 'utility:chevrondown';
    }

    get itemClass() {
        // Always visible on desktop, hidden on mobile unless toggled
       // this.showHiddenItems ? 'utility:up' : 'utility:down'; 
        return this.showHiddenItems ? 'grid-item slds-show_large' : 'grid-item ';
    }

    /* modal window */

    isShowModal = false;

    showModalBox() {  
        this.isShowModal = true;
    }

    hideModalBox() {  
        this.isShowModal = false;
    }

    value = '';

    get options() {
        return [
            { label: 'PO', value: 'option1' },
            { label: 'Search Article', value: 'option2' },
            { label: 'Search GTIN', value: 'option3' },
            { label: 'Scan Bar Code', value: 'option4' },
        ];
    }

    get optionsRadio() {
        return [
            { label: '', value: 'option1' },
            
        ];
    }



    value = '';

    get optionsPO() {
        return [
            { label: '010007921', value: '010007921' },
            { label: '010007922', value: '010007922' },
        ];
    }
    
}