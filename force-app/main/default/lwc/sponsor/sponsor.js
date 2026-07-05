import { LightningElement } from 'lwc';
import criterian_Images from '@salesforce/resourceUrl/criterianimg';
import backgroundUrl from '@salesforce/resourceUrl/criterianimg';


export default class Speakers extends LightningElement 
{

    govcar = criterian_Images + '/images/strativity.png';
    startlarge = criterian_Images + '/images/stravitylarge.png';
    psalert = criterian_Images + '/images/forrester.png';
    central = criterian_Images + '/images/central.png';
    lftarw = criterian_Images + '/images/leftarw.png';
    rgtarw = criterian_Images + '/images/rightarw.png';
    profilepic = criterian_Images + '/images/profilepic.jpg';
    profilepicsnd = criterian_Images + '/images/profilepic2.jpg';
    seemorespon = criterian_Images + '/images/seemorespon.png';
    sep = criterian_Images + '/images/sepline.png';
    spongallf = criterian_Images + '/images/sponsorimg1.png';
    spongalls = criterian_Images + '/images/sponsorimg2.png';
  

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

  /*  @api
    get sponsorOffTop()
    {

        return this.template.querySelectorAll('.midSectionCont');
    }*/
       
}