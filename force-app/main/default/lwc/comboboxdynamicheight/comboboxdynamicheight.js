import { LightningElement } from 'lwc';
export default class Comboboxdynamicheight extends LightningElement {


       value = 'inProgress';

    get options() {
        return [
            { label: 'New', value: 'new' },
            { label: 'In Progress', value: 'inProgress' },
               { label: 'In Progress', value: 'inProgress' },
                  { label: 'In Progress', value: 'inProgress' },
            { label: 'finished the quick brown fox jumps over the', value: 'finished the quick brown fox jumps over the' },
        ];
    }


    handleChange(e) 
    {

        alert("fun called");
         window.console.log("fun called");
   //    let el = this.template.querySelectorAll('.combo');

        let e1 = e.target.parentNode;
    //   let pnd = el.getBoundingClientRect();
      alert("length" + e1.offsetHeight);

          //   this.value = event.detail.value;
    }




}