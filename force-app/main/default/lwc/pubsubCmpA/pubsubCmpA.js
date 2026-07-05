import { LightningElement } from 'lwc';
import pubsub from 'c/pubsubCmp';

export default class PubsubCmpA extends LightningElement {
     

     message

    inputHandler(){
       // this.message = event.target.value
     const  obj = {
        name:"nitin",
        contact:"9818881572",
        company:"cognizant"
    }

     pubsub.publish('componentA', obj);
    }
    
    // publishHandler(){
    //   //  pubsub.publish('componentA', this.message)
    //     pubsub.publish('componentA', obj);
      
    // }
    
}