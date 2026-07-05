import { LightningElement, track } from 'lwc';
import { loadStyle } from 'lightning/platformResourceLoader';
import globalcss from '@salesforce/resourceUrl/globalcss';


export default class Parentcont extends LightningElement 
{

@track parentVal = "parent value send from parent component";

@track headerLabel = "header value from parent";


  connectedCallback() {
Promise.all([
loadStyle(this,globalcss)
]).then(() => {
   console.log("css loaded");
})
.catch(error => {
console.log("error");
});
}


    constructor() {
        super();
       // this.template.querySelectorAll('.childtxt').style.color ="blue";
    }

    renderedCallback() 
    {
       // this.template.querySelectorAll('.childtxt').style.color ="blue";
     //   var childtxt = this.template.querySelectorAll(".childtxt");
      // this.template.querySelectorAll('.childtxt')[0].style.color ="blue";

     //   for(let i=0; i<childtxt.length; i++){
      //          childtxt[i].classList.add('active');
    //        }

    //         this.template.querySelector('c-childcont').callchildmethod();
    }

    onChange() 
    {
       this.parentVal = "parent to child value";
    }

  
    callChildMethod() 
    {
      var chilMethod =  this.template.querySelector('c-childcont');
        chilMethod.callchildmethod();

       

    }

    
  handleEvent()
  {
       this.template.querySelectorAll(".infoCont")[0].classList.add('active');
  }
   
}