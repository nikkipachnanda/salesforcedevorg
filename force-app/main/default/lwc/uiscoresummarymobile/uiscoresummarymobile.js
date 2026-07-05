import { LightningElement,track } from 'lwc';
import myCommonStyles from '@salesforce/resourceUrl/scoretemp';
import { loadStyle } from 'lightning/platformResourceLoader';
import scoretempimg from '@salesforce/resourceUrl/scoretempimg';
export default class Uiscoresummarymobile extends LightningElement {
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


    @track sectionStates = {
        section1: true,
        section2: false
    };

    toggleSection(key) {
        this.sectionStates[key] = !this.sectionStates[key];
        // force reactivity
        this.sectionStates = { ...this.sectionStates };
    }

    get section1() {
        return {
            icon: this.sectionStates.section1 ? 'utility:chevronup' : 'utility:chevrondown',
            class: this.sectionStates.section1 ? 'slds-show' : 'slds-hide'
        };
    }

    get section2() {
        return {
            icon: this.sectionStates.section2 ? 'utility:chevronup' : 'utility:chevrondown',
            class: this.sectionStates.section2 ? 'slds-show' : 'slds-hide'
        };
    }

    handleToggleSection1() {
        this.toggleSection('section1');
    }

    handleToggleSection2() {
        this.toggleSection('section2');
    }

    /* modal window */

    isShowModal = false;

    showModalBox() {  
        this.isShowModal = true;
    }

    hideModalBox() {  
        this.isShowModal = false;
    }

       value = 'Additional cooling is required';

    get options() {
        return [
            { label: 'New', value: 'new' },
            { label: 'Additional cooling is required', value: 'Additional cooling is required' },
            { label: 'Finished', value: 'finished' },
        ];
    }
}