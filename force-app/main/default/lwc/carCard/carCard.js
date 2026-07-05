import { LightningElement, wire } from 'lwc';

//Car__c Schema

import NAME_FIELD from '@salesforce/schema/car__c.Name'
import PICTURE_URL_FIELD from '@salesforce/schema/car__c.Picture_URL__c'
import CATEGORY_FIELD from '@salesforce/schema/car__c.category__c'
import MAKE_FIELD from '@salesforce/schema/car__c.Make__c'
import MSRP_FIELD from '@salesforce/schema/car__c.MSRP__c'
import FUEL_FIELD from '@salesforce/schema/car__c.Fuel_Type__c'
import SEATS_FIELD from '@salesforce/schema/car__c.Number_of_Seats__c'
import CONTROL_FIELD from '@salesforce/schema/car__c.control__c'

import CARS_SELECTED_MESSAGE from '@salesforce/messageChannel/carSelectedMessageChannel__c'
import { subscribe, MessageContext} from 'lightning/messageService';
import {NavigationMixin} from 'lightning/navigation';
import CAR_OBJECT from '@salesforce/schema/car__c'

// getFieldValue function is used to extract field values
import {getFieldValue} from 'lightning/uiRecordApi'
export default class CarCard extends NavigationMixin (LightningElement) {

    //Load context
    @wire(MessageContext)
    messageContext

    //exposing fields to make them available in the template
    categoryField = CATEGORY_FIELD
    makeField = MAKE_FIELD 
    msrpField = MSRP_FIELD
    fuelField = FUEL_FIELD
    seatsField = SEATS_FIELD
    controlField = CONTROL_FIELD

    //Id of Car__c to display data
    recordId

    //reference for car selection
    carSelectionSubscription

    // car fields displayed with specific format
    carName
    carPictureUrl
    handleRecordLoaded(event){
        const {records} = event.detail
        const recordData = records[this.recordId]
        this.carName = getFieldValue(recordData, NAME_FIELD)
        this.carPictureUrl = getFieldValue(recordData, PICTURE_URL_FIELD)
    }

  

      connectedCallback(){
        this.subscribeHandler()
    }

    subscribeHandler(){
        this.carSelectionSubscription = subscribe(this.messageContext, CARS_SELECTED_MESSAGE, (message)=>this.handleCarSelected(message))
    }
    handleCarSelected(message){
        this.recordId = message.carId
    }

    disconnectedCallback(){
        unsubscribe(this.carSelectionSubscription)
        this.carSelectionSubscription = null
    }

  /**navigate to record page */
    handleNavigateToRecord(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:this.recordId,
                objectApiName:CAR_OBJECT.objectApiName,
                actionName:'view'
            }
        })
    }
}