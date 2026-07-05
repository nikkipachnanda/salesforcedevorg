import { LightningElement, api, wire } from 'lwc';
import getTilesData from '@salesforce/apex/accountManager.getTilesData';
import Score_Images from '@salesforce/resourceUrl/slideimages';


export default class Tiles extends LightningElement {
      @api getTilesData;

      loadTilesData() {
       
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
        this.loadTilesData();    
    }
}