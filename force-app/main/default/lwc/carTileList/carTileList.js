import { LightningElement, wire } from 'lwc';
import getCars from '@salesforce/apex/CarController.getCars'
import CARS_FILTERED_MESSAGE from '@salesforce/messageChannel/carFilteredMessageChannel__c'
import CARS_SELECTED_MESSAGE from '@salesforce/messageChannel/carSelectedMessageChannel__c'
import {publish, subscribe, MessageContext} from 'lightning/messageService';


export default class CarTileList extends LightningElement {

      cars = [];
      carFilterSubscription

  //  @wire(getCars, {filters:'$filters'})
  //@wire(getCars);

    filters = {};
    @wire(getCars, {filters:'$filters'})
  
  //  error
    carsHandler({data, error}) 
    {
        if(data) 
        {
            console.log("CAR TILES RECORDS" + JSON.stringify(data));
           this.cars = data;
        }
        if(error) 
        {
           console.log(error);  
        }

        
    }

    @wire(MessageContext)
    messageContext;

    connectedCallback() {
       this.subscribeHandler();
    }

    subscribeHandler() {
       this.carFilterSubscription = subscribe(this.messageContext, CARS_FILTERED_MESSAGE, (message)=> {
        this.handleFilterChanges(message);
       })
    }

  handleFilterChanges(message) {
    console.log(message.filters);
    this.filters = {...message.filters}
  }

  handleCarSelected(event){
         console.log("selected car Id", event.detail)
         publish(this.messageContext, CARS_SELECTED_MESSAGE, {
            carId:event.detail
         })
     }
     disconnectedCallback(){
        unsubscribe(this.carFilterSubscription)
        this.carFilterSubscription = null
    }

}