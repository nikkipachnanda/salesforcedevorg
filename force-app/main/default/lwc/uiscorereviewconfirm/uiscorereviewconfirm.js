import { LightningElement,track } from 'lwc';
import myCommonStyles from '@salesforce/resourceUrl/scoretemp';
import { loadStyle } from 'lightning/platformResourceLoader';
import scoretempimg from '@salesforce/resourceUrl/scoretempimg';
export default class Uiscorereviewconfirm extends LightningElement {
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
        sectionBack: true,
        sectionMiddle: true,
        sectionFront: true
    };

    toggleSection(key) {
        this.sectionStates[key] = !this.sectionStates[key];
        // force reactivity
        this.sectionStates = { ...this.sectionStates };
    }

    get sectionBack() {
        return {
            icon: this.sectionStates.sectionBack ? 'utility:chevronup' : 'utility:chevrondown',
            class: this.sectionStates.sectionBack ? 'slds-show' : 'slds-hide'
        };
    }

    get sectionMiddle() {
        return {
            icon: this.sectionStates.sectionMiddle ? 'utility:chevronup' : 'utility:chevrondown',
            class: this.sectionStates.sectionMiddle ? 'slds-show' : 'slds-hide'
        };
    }
    
    get sectionFront() {
        return {
            icon: this.sectionStates.sectionFront ? 'utility:chevronup' : 'utility:chevrondown',
            class: this.sectionStates.sectionFront ? 'slds-show' : 'slds-hide'
        };
    }

       get scoreBrdBClassBack() {
            return ` ${this.sectionStates.sectionBack ? 'scoreBrdB' : ''}`;
        }
        get scoreBrdBClassMiddle() {
            return ` ${this.sectionStates.sectionMiddle ? 'scoreBrdB' : ''}`;
        }
        get scoreBrdBClassFront() {
            return `alignHorizontal alignRight ${this.sectionStates.sectionFront ? 'scoreBrdB' : ''}`;
        }
    handleToggleSectionBack() {
        this.toggleSection('sectionBack');
    }

    handleToggleSectionMiddle() {
        this.toggleSection('sectionMiddle');
    }

      handleToggleSectionFront() {
        this.toggleSection('sectionFront');
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