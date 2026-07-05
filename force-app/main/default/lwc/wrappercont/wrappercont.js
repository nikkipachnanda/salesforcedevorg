import { LightningElement, track, api } from 'lwc';
import backgroundUrl from '@salesforce/resourceUrl/criterianimg';
import criterian_Images from '@salesforce/resourceUrl/criterianimg';
export default class Wrappercont extends LightningElement {
  //this.template.querySelectorAll('.menu')[0].style.backgroundColor="blue";
     
  @track headerMenuItems;
  @api agenda;
  @api overviewPos;
  botarrow = criterian_Images + '/images/botarrow.svg';
 
  constructor() {
    super();
    window.addEventListener('scroll', this.handleScroll.bind(this));

    
}

handleScroll(){
    // debugger;
    // let headerMenuItem=this.template.querySelector('c-header').headerMenuItem;
    // console.log('headerMenuItem'+headerMenuItem);
 
  //debugger;
   let header=this.template.querySelector('c-topbanner');
   let overview=this.template.querySelector('c-overview');
   let regisLen = header.headerRegister;
   
   let headerLen = header.headerMenuItem;
   let headerLenTab = header.headerMenuItemTab;


   let overviewOffset  = overview.offsetTop - 60;

  // debugger;
   //let headerNavPos = 120;
   
   //console.log(overviewPos);

   
  // let scrollPos = window.scrollY;
   

 // header[0].classList.add('mobOrderFixed');
  if (window.scrollY > overviewOffset) 
   {
    headerLen[0].classList.add('mobOrderFixed');
    headerLenTab[0].classList.add('mobOrderFixed');
    regisLen[0].classList.add('dspblk');
    regisLen[0].classList.remove('dspn');
   }

   else
   {
    headerLen[0].classList.remove('mobOrderFixed');
    headerLenTab[0].classList.remove('mobOrderFixed');
    regisLen[0].classList.add('dspn');
    regisLen[0].classList.remove('dspblk');
   }
       
   

}



  
}