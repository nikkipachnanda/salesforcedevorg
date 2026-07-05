import { LightningElement,track } from 'lwc';
import myCommonStyles from '@salesforce/resourceUrl/scoretemp';
import { loadStyle } from 'lightning/platformResourceLoader';
import scoretempimg from '@salesforce/resourceUrl/scoretempimg';
export default class Uiscoreaddarticlemobile extends LightningElement {
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