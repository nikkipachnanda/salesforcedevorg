import { LightningElement } from 'lwc';
import myCommonStyles from '@salesforce/resourceUrl/customfeet';
import { loadStyle } from 'lightning/platformResourceLoader';
import cfimages from '@salesforce/resourceUrl/cfimg';
 //import backgroundImage from '@salesforce/resourceUrl/cfimg/loginbg';


export default class Cflogin extends LightningElement { 

       logo = cfimages + '/logo.svg';
       loginbgUrl = cfimages + '/loginbg.png';
       backgroundStyle = `background-image: url(${cfimages}/loginbg.png);`; // Dynamically set background image
      // backgroundImage = `${cfimg}/cfimg/to/loginbg.jpg`;

       constructor() {
        super();
        loadStyle(this, myCommonStyles)
            .then(result => {
                // Possibly do something when load is complete.
            });
    }
}