import { LightningElement,api,track } from 'lwc';
import criterian_Images from '@salesforce/resourceUrl/criterianimg';
import backgroundUrl from '@salesforce/resourceUrl/criterianimg';
//import { backgroundStyleTopBg } from 'c/overview';
export default class Venue extends LightningElement 
{
    map = criterian_Images + '/images/map.png';

   
    
    get backgroundStyleTopBg() {
        //  let Sfdcimage1 = backgroundUrl + '/images/header.jpg';
        return ` background-image:url(${backgroundUrl}/images/circlesmallbg.png); background-repeat:no-repeat;`;
    }

    get backgroundStylebotBg() {
        //  let Sfdcimage1 = backgroundUrl + '/images/header.jpg';
        return ` background-position: bottom right; background-image:url(${backgroundUrl}/images/circlelargebg.png); background-repeat:no-repeat;`;
    }

  /*  @api
    get venueOffsetTop()
    {

        return this.template.querySelectorAll('.venueCont');
    }*/
    
}