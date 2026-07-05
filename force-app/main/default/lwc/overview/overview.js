import { LightningElement, track, api } from 'lwc';
import backgroundUrl from '@salesforce/resourceUrl/criterianimg';
import criterian_Images from '@salesforce/resourceUrl/criterianimg';

export default class Overview extends LightningElement {

    seemore = criterian_Images + '/images/seemore.png';
    hidecont = criterian_Images + '/images/collapse.png';
    @track boolVisible = false;
    @track showContent = 'Show';
    @track hideContent = 'Hide';
    @track seemoreimg = 'true';

    handleClick(event) {
        const label = event.target.title;

        if (label === 'Show') {
            this.boolVisible = true;
            this.template.querySelector(".show").classList.add("imghide");

            let elems =  this.template.querySelectorAll(".hide");

            [].forEach.call(elems, function(el) {
                el.classList.remove("imghide");
            });


        } else if (label === 'Hide') {

            this.boolVisible = false;
            this.template.querySelector(".hide").classList.add("imghide");
           
             let elems =  this.template.querySelectorAll(".show");

            
                [].forEach.call(elems, function(el) {
                    el.classList.remove("imghide");
                });
 
        }
    }


    get backgroundStyleBullet() {
        //  let Sfdcimage1 = backgroundUrl + '/images/header.jpg';
        return ` height:8px; background-image:url(${backgroundUrl}/images/bulleticn.png); background-repeat:no-repeat;`;
    }

    get backgroundStyleTopBg() {
        //  let Sfdcimage1 = backgroundUrl + '/images/header.jpg';
        return ` background-image:url(${backgroundUrl}/images/circlesmallbg.png); background-repeat:no-repeat;`;
    }

    get backgroundStylebotBg() {
        //  let Sfdcimage1 = backgroundUrl + '/images/header.jpg';
        return ` background-position: bottom right; background-image:url(${backgroundUrl}/images/circlelargebg.png); background-repeat:no-repeat;`;
    }

    @api
    get overView()
    {

        return this.template.querySelectorAll('.overViewCont');
    }

}