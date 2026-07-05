import { LightningElement,track } from 'lwc';
export default class Splitviewflag extends LightningElement {


splitview = false;
 dynamicClassFc = 'slds-size_12-of-12'; 
 dynamicClassSc = 'slds-size_12-of-12'; 

 

  get getScreenWidth() {
    return this.split ? "slds-col slds-size_6-of-12 cols1 slds-col" : "slds-col slds-size_12-of-12 cols1 slds-col";
  }
  handleClickSplit() {
    this.split = !this.split;
  }

  get options() {
    return [
      {
        Name: 'Split Screen',
        Id: 'option1',
      },
      {
        Name: 'Full Screen',
        Id: 'option2',
      }
    ];
  }

  handleGetSelectedValue(event) {
    if (event.target.value === 'option1') {
    this.splitview = true;
     // const ac = this.template.querySelectorAll('.colsSC');

     // const acs = this.template.querySelectorAll('.colsSCS');
     // alert(acs.length);

      // const spview = this.template.querySelectorAll('.spviewtsec ')[0];
      // const spbview = this.template.querySelectorAll('.spviewbsec ')[0];

      // spview.classList.remove("dsnone");

      // spbview.classList.add("dsnone");

      // for (let i = 0; i < ac.length; i++) {
      //   ac[i].classList.add('slds-size_6-of-12');
      //   ac[i].classList.remove('slds-size_12-of-12');

      // }

      this.dynamicClassFc  = 'slds-col slds-size_6-of-12';
      this.dynamicClassSc = 'slds-size_6-of-12';

      // for (let i = 0; i < acs.length; i++) {
      // //  acs[i].classList.add('colsSCSShow');
      //   acs[i].classList.remove('slds-size_12-of-12');
      //   acs[i].classList.add('slds-size_6-of-12');

      // }
           
    }

    else if (event.target.value === 'option2') {
         this.splitview = false;
     // const ac = this.template.querySelectorAll('.colsSC');
     // const acs = this.template.querySelectorAll('.colsSCS');
      // const spview = this.template.querySelectorAll('.spviewtsec ')[0];
      // const spbview = this.template.querySelectorAll('.spviewbsec ')[0];

      // spview.classList.add("dsnone");

      // spbview.classList.remove("dsnone");

  

      // for (let i = 0; i < ac.length; i++) {
      //   ac[i].classList.remove('slds-size_6-of-12');
      //   ac[i].classList.add('slds-size_12-of-12');
      // }

        this.dynamicClassFc  = 'slds-size_12-of-12';

       
    //  for (let i = 0; i < acs.length; i++) {
       // acs[i].classList.remove('colsSCSShow');
     //   acs[i].classList.add('colsSCS');

   //   }
    }
  }

 
   
}