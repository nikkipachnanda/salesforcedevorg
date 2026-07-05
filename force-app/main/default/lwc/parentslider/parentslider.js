import { LightningElement } from 'lwc';
import imgslider from '@salesforce/resourceUrl/imgslider';

export default class Parentslider extends LightningElement {

     slider1Image =  imgslider + '/1.jpg';
    slider2Image = imgslider + '/2.jpg';
    slider3Image = imgslider + '/3.jpg';
    slider4Image = imgslider + '/4.jpg';

    
  //  slider1Image = 'https://cdn0.woolworths.media/content/wowproductimages/large/263634_7.jpg';
    slider1Link = '#';
   // slider2Image = 'https://cdn0.woolworths.media/content/wowproductimages/large/263669_4.jpg';
    slider2Link = '#';
 //   slider3Image = 'https://cdn0.woolworths.media/content/wowproductimages/large/291021.jpg';
    slider3Link = '#';
 //   slider4Image = 'https://cdn0.woolworths.media/content/wowproductimages/large/824734.jpg';
    slider4Link = '#';
    autoScroll = true;

    get sliderData() {
        return [{
            "image": this.slider1Image,
            "link": this.slider1Link,
            "heading": "",
            "description": "",
        },
        {
            "image": this.slider2Image,
            "link": this.slider2Link,
            "heading": "",
            "description": "",
        },
        {
            "image": this.slider3Image,
            "link": this.slider3Link,
            "heading": "",
            "description": "",
        },
        {
            "image": this.slider4Image,
            "link": this.slider4Link,
            "heading": "",
            "description": "",
        },
        ]
    }
showModal = false;
       openModal() {
        // Setting boolean variable to true, this will show the Modal
        this.showModal = true;
    }

    closeModal() {
        
        // Setting boolean variable to false, this will hide the Modal
        this.showModal = false;
    }
}