import { LightningElement } from 'lwc';
export default class Dropdowndynamicwidth extends LightningElement {
   
    
         value = 'inProgress';

    get options() {
        return [
            { label: 'Nebrown fox jumps over the littlew', value: 'brown fox jumps over the little' },
            { label: 'inProgress the quick brown fox jumps over the little quick brown fox jumps over the little', value: 'inProgress the quick brown fox jumps quick brown fox jumps over the little over the little' },
            { label: 'Finished fox jumps over the little', value: 'finished fox jumps over the little' },
        ];
    }

    handleChange(event) {
        this.value = event.detail.value;
    }

//      getDynamicTdWidth() {
//        let getVal = this.template.querySelector('.dropdownW').offsetWidth + "px";
           
//       //  alert(getVal);   
//        this.template.querySelector('.dropdown').style.width = getVal;

//    }

//    renderedCallback(){
//        this.getDynamicTdWidth();
//    }
       


}