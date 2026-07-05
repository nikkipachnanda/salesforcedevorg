import { LightningElement, api, track } from 'lwc';
import criterian_Images from '@salesforce/resourceUrl/criterianimg';
import backgroundUrl from '@salesforce/resourceUrl/criterianimg';


export default class Speakers extends LightningElement 
{

    profpic = criterian_Images + '/images/profilepic.jpg';
    profpic2 = criterian_Images + '/images/profilepic2.jpg';
    profpic3 = criterian_Images + '/images/profilepic3.png';
    profpic4 = criterian_Images + '/images/profilepic4.png';
    lftarw = criterian_Images + '/images/leftarw.png';
    rgtarw = criterian_Images + '/images/rightarw.png';
    profilepic = criterian_Images + '/images/profilepic.jpg';
    profilepicsnd = criterian_Images + '/images/profilepic2.jpg';
    seemore = criterian_Images + '/images/seemore.png';
    sep = criterian_Images + '/images/sepline.png';
  

    get whiteBoxBg() 
    {
        //  let Sfdcimage1 = backgroundUrl + '/images/header.jpg';
           return ` width:50px; height:50px;   background-image:url(${backgroundUrl}/images/workbox.svg)`;
       }

       get backgroundSep() {
        //  let Sfdcimage1 = backgroundUrl + '/images/header.jpg';
           return ` background-image:url(${backgroundUrl}/images/sepline.png)`;
       }
       
       get backgroundStyleBullet() {
        //  let Sfdcimage1 = backgroundUrl + '/images/header.jpg';
        return ` height:8px; background-image:url(${backgroundUrl}/images/bulleticn.png); background-repeat:no-repeat;`;
    }

    get backgroundStyleTopBg() {
        //  let Sfdcimage1 = backgroundUrl + '/images/header.jpg';
        return ` background-image:url(${backgroundUrl}/images/circlesmallbg.png); background-repeat:no-repeat;`;
    }

    @track imageSections;
    @track childrenElem;
    @track list_len;
    @track currentSlide = 0;
    @track perVal;

    renderedCallback() { 
        debugger;

        let screenWidth = screen.width;
         
        if (screenWidth > 1023) 
        {
            this.perVal = 27;
        }

       else
        {
            this.perVal = 64;
        }
            console.log(screenWidth);

        this.imageSections = this.template.querySelectorAll(".imageGallCont")[0]; 
        this.childrenElem = this.template.querySelectorAll(".speakersTxtCont");
        this.list_len = this.childrenElem.length; 
       // let currentSlide = 0;
        //childrenElem.classList.add("galleryLft");
        //let list;
        // imageSections.style.transform = "translateX(0%)";  
        this.imageSections.style.transform = "translateX(0%)";
           for (let i = 0; i < this.list_len; i++) {
            this.childrenElem[i].style.transform = "translateX(" + i * this.perVal + "%)";
            }
       
        }
  
  
    nextSlide(e)  
    {
       
         //  console.log(imageSections.length);
       debugger;
       if (this.currentSlide >= this.list_len - 1) return false;
        this.currentSlide++;
        // childrenElem.classList.add("galleryLft");
        this.imageSections.style.transform = "translateX(" + -this.currentSlide * this.perVal + "%)";
        console.log(this.imageSections.style.transform);
    }


    prevSlide(e)  
    {
       
         //  console.log(imageSections.length);
       debugger;
       if (this.currentSlide <= 0) return false;
        this.currentSlide--;
        // childrenElem.classList.add("galleryLft");
        this.imageSections.style.transform = "translateX(" + -this.currentSlide * this.perVal + "%)";
        console.log(this.imageSections.style.transform);
    }
   


 /*   @api
    get speakerOffTop()
    {

        return this.template.querySelectorAll('.speakerCont');
    }*/
  
}