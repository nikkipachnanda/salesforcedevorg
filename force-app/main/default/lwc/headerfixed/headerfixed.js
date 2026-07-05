import { LightningElement } from 'lwc';
export default class Headerfixed extends LightningElement {

     constructor() {
        super();
        window.addEventListener('scroll', this.handleScroll.bind(this)); 
    }
    handleScroll()
    { 

          let scrollTop =this.template.querySelectorAll(".midCont")[0];
          let tHead = this.template.querySelectorAll(".tableHeader")[0];

         //   this.console.log(scrollTop);
          //  alert("test");
           // let lenW= scrollTop.length;
            //console.log(lenW + "btn length");
              let overviewOffset  = scrollTop.offsetTop;

            console.log(overviewOffset + "offset position");
        //    this.template.querySelectorAll('.midCont')[0].style.backgroundColor="blue";

          if (window.scrollY > overviewOffset) 
          {
               //  btnBottom[0].classList.add('dspn');
                 tHead.classList.add('tableHeaderFixCont');
                 // btnBottom.classList.remove('dspn');
               //  btnBottom[0].classList.remove('dspblk');
          }

            else 
            {
             //   btnBottom[0].classList.add('dspn');
             //   btnBottom[0].classList.remove('dspblk');
                //  tHead.classList.add('dspn');
                 tHead.classList.remove('tableHeaderFixCont');
             }
    }
}