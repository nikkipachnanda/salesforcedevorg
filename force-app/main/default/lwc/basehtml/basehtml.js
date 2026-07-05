import { LightningElement } from 'lwc';
export default class Basehtml extends LightningElement {
  
  databinding = "akhilesh we need your help in ux designing";
 
  greeting ="";

  changeHandler(event) 
  {
      this.greeting = event.target.value;
  }

 renderedCallback(){
     let elem = this.template.querySelectorAll('.list li');
     console.log("length of elements" + elem.length);

     // new way to iterate of vlaues

       [].forEach.call(elem, function(el) {
        el.classList.add("tabFont");
      });

     // old way to iterate of vlaues
      for(let i=0; i<elem.length; i++) 
      {
          elem[i].classList.add("bgclass");
      }
 }

}