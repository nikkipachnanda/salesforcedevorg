import { LightningElement, track } from 'lwc';
import getCustomData from '@salesforce/apex/accountManager.getList';

export default class Comoboxapex extends LightningElement {

    @track value;
    @track accOption= [];

    get options() {
        return this.accOption;
    }

    connectedCallback() {
          getCustomData()
            .then(result => {
               let arr = [];
               for(var i=0; i<result.length; i++) 
               {
                   arr.push({label:result[i].Name, value:result[i].Id})
               }
               this.accOption = arr;
            })
    }

    handleChange(event) {
        alert("test");
        this.value = event.target.options.find(opt => opt.value === event.detail.value).label;
    }

}