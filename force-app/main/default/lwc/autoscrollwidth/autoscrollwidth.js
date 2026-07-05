import { LightningElement, api } from 'lwc';
export default class Autoscrollwidth extends LightningElement {

 


    //  widthFun () 
    //  {
    //        const elem = this.template.querySelectorAll('.innerCont');
           
    //        const wid = window.outerWidth + "px";
         
    //        elem.style.width = window.outerWidth + "px";

    //          alert( elem.style.width);
    //  }

     get dWidth () 
     {
       //  const elem = this.template.querySelectorAll('.outerCont');
         const wid = window.outerWidth + "px";  

         return 'width:' + wid;
     }
   
   renderedCallback(){
    //   this.widthFun();
   }
}