// wireGetRecordDynamicContact.js
import { LightningElement, api, wire } from 'lwc';
import getAllAccounts from '@salesforce/apex/accountManager.getAccount';
import getCustomData from '@salesforce/apex/accountManager.getCustomObjData';
import getmidContData from '@salesforce/apex/accountManager.getmidContData';
import getTilesData from '@salesforce/apex/accountManager.getTilesData';
import Score_Images from '@salesforce/resourceUrl/slideimages';
import bodylabel from '@salesforce/label/c.bodyinfo';
import testimglogo from '@salesforce/resourceUrl/testimglogo';

/* accountManager.apxc files should be opened to view above account manager functions */

import { getRecord } from 'lightning/uiRecordApi';


export default class WireGetRecordDynamicContact extends LightningElement {
    @api contacts;
    @api error;

    @api getCustomData;
    @api getmidContData;
    @api getTilesData;

    @api label = {
      bodylabel,
      testimglogo
    }

    report = Score_Images + '/scoreimages/report.svg';
    dashboard = Score_Images + '/scoreimages/dashboard.svg';

 

   handleLoad() {
        getAllAccounts()
            .then(result => {
                this.contacts = result;
              //  alert('connectedcall back'+JSON.stringify(result));
            })
            .catch(error => {
                this.error = error;
            });
    }

    
    handleLoad2() {
        getCustomData()
            .then(result => {
                this.getCustomData = result;
                console.log("data" + this.getCustomData);
              console.log('connectedcall back'+JSON.stringify(result));
            })

         getmidContData()
            .then(result => {
                this.getmidContData = result;
                console.log("data" + this.getmidContData);
              console.log('connectedcall back'+JSON.stringify(result));
            })
            .catch(error => {
                this.error = error;
            });

             getTilesData()
            .then(result => {
                this.getTilesData = result;
                console.log("data get tilesdata" + this.getTilesData);
              console.log('connectedcall back'+JSON.stringify(result));
            /*   let tData = JSON.parse(JSON.stringify(result));
                 tData.forEach( function(item) 
                 {
                   item.imgname = Score_Images + '/scoreimages/'+ item.imgname__c;
                 }, this
                    
                 );

                 this.getTilesData = tData;*/
              
            })
            .catch(error => {
                this.error = error;
            });

            
    }

    connectedCallback()
    {
        //alert('connectedcall back');
      this.handleLoad(); 
        this.handleLoad2();    
    }
}