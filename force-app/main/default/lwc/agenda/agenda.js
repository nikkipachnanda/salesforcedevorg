import { LightningElement, api } from 'lwc';
import criterian_Images from '@salesforce/resourceUrl/criterianimg';
import backgroundUrl from '@salesforce/resourceUrl/criterianimg';
export default class Agenda extends LightningElement {
    neticn = criterian_Images + '/images/activeicn.svg';
    profilepic = criterian_Images + '/images/profilepic.jpg';
    profilepicsnd = criterian_Images + '/images/profilepic2.jpg';

    get whiteBoxBg() {
        //  let Sfdcimage1 = backgroundUrl + '/images/header.jpg';
        return ` width:50px; height:50px;   background-image:url(${backgroundUrl}/images/workbox.svg)`;
    }

    get backgroundStyleTopBg() {
        //  let Sfdcimage1 = backgroundUrl + '/images/header.jpg';
        return ` background-image:url(${backgroundUrl}/images/circlesmallbg.png); background-repeat:no-repeat;`;
    }

    get backgroundStylebotBg() {
        //  let Sfdcimage1 = backgroundUrl + '/images/header.jpg';
        return ` background-position: bottom right; background-image:url(${backgroundUrl}/images/circlelargebg.png); background-repeat:no-repeat;`;
    }


    activeNav(e) 
    { 
       let elem = this.template.querySelectorAll(".agendaTabSection li");
       // elem.classList.toggle("active");
       [].forEach.call(elem, function(el) {
        el.classList.remove("tabFont");
      });

      e.currentTarget.classList.add("tabFont");
    }

    @api
    get agendaOffsetTop()
    {

        return this.template.querySelectorAll('.agendaCont');
    }

}