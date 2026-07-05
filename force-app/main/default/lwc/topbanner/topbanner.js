import { LightningElement, track , api} from 'lwc';
import backgroundUrl from '@salesforce/resourceUrl/criterianimg';
import criterian_Images from '@salesforce/resourceUrl/criterianimg';


export default class Topbanner extends LightningElement 
{

    routeImg = backgroundUrl + '/images/route.png';
    clockdesk = backgroundUrl + '/images/clock.svg';
    discountdesk = backgroundUrl + '/images/discount.svg';
    clockdeskwh = backgroundUrl + '/images/clockwh.png';
    discountdeskwh = backgroundUrl + '/images/disocuntwh.png';
    neticn = criterian_Images + '/images/activeicn.svg';
   
/*
    @track imageDyanmicUrl;
    @track something;*/


  
   /* activeNavHead(e) 
    { 
     

      let elem = this.template.querySelectorAll(".menu li");
       // elem.classList.toggle("active");
       [].forEach.call(elem, function(el) {
        el.classList.remove("active");
       // console.log(el.nodes.indexOf());
      //  console.log(el.nodes.indexOf());
      });

      e.currentTarget.className = "active";
      

    }*/

    

    handleClick() {
      //   const label = event.target.label;
        
         this.template.querySelector(".navMobArw i").classList.toggle("fa-caret-left");
         let elem = this.template.querySelectorAll(".menu")[0]; 
       //  debugger;
             elem.classList.toggle("menuHide");
       }

    renderedCallback() 
    {
      let menulnk = this.template.querySelectorAll(".agendaCont");
      console.log(menulnk.length);
    //  menulnk[1].classList.add("active");
    }
   
 
  /*  renderedCallback() 
    {
     
    /*  debugger;
      let elem1 = window.screen.availWidth;

        if(elem1 < 1024) 
        {
            this.something = true;
        }

       else
        {
            this.something = false;
        }*/
        
       //    console.log(elem1);
      /*  window.addEventListener('scroll', function() 
         {     window.console.log("hi");
            let regtopPos = this.template.querySelectorAll(".topBanner")[0];
         
            if (regtopPos.offsetHeight > 200) 
            
            { 
                window.console.log("height is grator than 300");
            }
       });*/
     //  this.template.querySelectorAll(".logo")[0].style.display='none';

       // let elem = this.template.querySelectorAll(".registerNow")[0]; 
      //  debugger;
       //  elem.classList.add("dspn");
     /*  window.addEventListener('scroll', () => 
       {
          //  const scrollheight = document.documentElement.scrollHeight - window.innerHeight;
           //debugger; 
           
           const scrolled = window.scrollY;
            if (scrolled > 250) 
            
            { 
                 window.console.log("less than 200");
                let elem = this.template.querySelectorAll(".registerNow")[0]; 
                //  debugger;
                    elem.classList.add("dspblk");
                    elem.classList.remove("dspn");
            }

            if (scrolled < 250) 
            
            { 
                 window.console.log("less than 200");
                let elem = this.template.querySelectorAll(".registerNow")[0]; 
                //  debugger;
                    elem.classList.add("dspn");
                    elem.classList.remove("dspblk");
            }

         
       });*/

     
      //  this.template.querySelectorAll('.menu')[0].style.backgroundColor="blue";
       //  debugger;
       //  let imageUrl = "https://criterionconferences--alphadev2--c.cs76.content.force.com/servlet/servlet.ImageServer?id=0159D0000005lbV&oid=00D9D0000008aZq"; 
      //   this.console.log(imageUrl);
        // this.template.querySelectorAll('.mobOrder')[0].style.backgroundImage = imageUrl;
  //  }

  

   /* handleClick() {
        //   const label = event.target.label;
           this.template.querySelector(".navMobArw i").classList.toggle("fa-caret-left");
           let elem = this.template.querySelectorAll(".menu")[0]; 
         //  debugger;
               elem.classList.toggle("menuHide");
         }*/
        
         @api
         get headerMenuItem(){
           return this.template.querySelectorAll(".mobResNav");
         }
        
         @api
         get headerMenuItemTab(){
           return this.template.querySelectorAll(".mobNavCont");
         }
        

         @api
         get headerNav(){
           return this.template.querySelectorAll(".toxBoxMob");
         }

         @api
         get headerRegister()
         {
           return this.template.querySelectorAll(".registerNow");
         }
         
         
  
}