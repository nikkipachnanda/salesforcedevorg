import { LightningElement, api } from 'lwc';
import backgroundUrl from '@salesforce/resourceUrl/criterianimg';
import criterian_Images from '@salesforce/resourceUrl/criterianimg';

export default class Contactus extends LightningElement {

    lnkimg = criterian_Images + '/images/clnkdin.png';
    twtimg = criterian_Images + '/images/ctwitter.png';
    fbimg = criterian_Images + '/images/cfacebook.png';
    cb = criterian_Images + '/images/cb.png';
    neticn = criterian_Images + '/images/activeicn.svg';
    cntus = criterian_Images + '/images/contact.png';
    phn = criterian_Images + '/images/phone.png';
    profpic = criterian_Images + '/images/profilepic.jpg';
    profpic2 = criterian_Images + '/images/profilepic2.jpg';
    profpic3 = criterian_Images + '/images/profilepic3.png';
    profpic4 = criterian_Images + '/images/profilepic4.png';


    get backgroundStyleTopBg() {
        //  let Sfdcimage1 = backgroundUrl + '/images/header.jpg';
        return ` background-image:url(${backgroundUrl}/images/circlesmallbg.png); background-repeat:no-repeat;`;
    }

    get backgroundStylebotBg() {
        //  let Sfdcimage1 = backgroundUrl + '/images/header.jpg';
        return ` background-position: bottom right; background-image:url(${backgroundUrl}/images/circlelargebg.png); background-repeat:no-repeat;`;
    }

   /* @api
    get contactUsTop()
    {

        return this.template.querySelectorAll('.midSectionCont');
    }*/
}