import { LightningElement, api } from 'lwc';
import criterian_Images from '@salesforce/resourceUrl/criterianimg';
export default class Partners extends LightningElement {

    govcar = criterian_Images + '/images/govcar.png';
    psalert = criterian_Images + '/images/psalert.png';
    lftarw = criterian_Images + '/images/leftarw.png';
    rgtarw = criterian_Images + '/images/rightarw.png';


  /*  @api
    get partnerOffTop()
    {

        return this.template.querySelectorAll('.partnersCont');
    }*/
    

}