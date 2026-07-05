import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';



export default class Navigatecmp extends NavigationMixin(LightningElement) {

   homepage = false;

   onHomgePage() 
   {
       this.homepage =true;
   }

   

    // navigateToNextComponent() {
    //     this[NavigationMixin.Navigate]({
    //         type: 'standard__component',
    //         attributes: {
    //             componentName: 'c-comexhomepage' // Replace 'c-myNextComponent' with the name of your next component
    //         }
    //     });

    //     console.log("navigation")
    // }



    //    navigateToNextComponent() {
    //     this[NavigationMixin.Navigate]({
    //         type: 'standard__webPage',
    //         attributes: {
    //             url: '/homepage' // Replace 'c-myNextComponent' with the name of your next component
    //         }
    //     });
    // }


}