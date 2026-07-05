import { LightningElement, track } from 'lwc';
import submitScoreAction from '@salesforce/apex/lwcAppExampleApex.submitScoreAction';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import {NavigationMixin} from 'lightning/navigation';


export default class insertRecordCustomObjectLwc extends NavigationMixin (LightningElement) {

    @track scoreObName;
    @track scoreObjEmail;
    @track scoreObjPhone;
    @track scoreObjCity;
    @track scoreObjAnnual;
    @track scoreObjDesignations;
    @track scoreRecoreId;
    @track errorMsg;

   scoreHandleChange(event){
        if(event.target.name == 'scoreName'){
        this.scoreObName = event.target.value;  
        //window.console.log('scoreObName ##' + this.scoreObName);
        }
      if(event.target.name == 'scoreEmail'){
        this.scoreObjEmail = event.target.value;  
      }

      if(event.target.name == 'scorePhone'){
        this.scoreObjPhone = event.target.value;  
      }
      if(event.target.name == 'scoreCity'){
        this.scoreObjCity = event.target.value;  
      }
      if(event.target.name == 'scoreAnnual'){
        this.scoreObjAnnual = event.target.value;  
      }
      if(event.target.name == 'scoreObjDesignations'){
        this.scoreObjDesignations = event.target.value;  
      }


 }

 submitAction(){
    submitScoreAction({cardName:this.scoreObName,cardEmail:this.scoreObjEmail,cardPhone:this.scoreObjPhone,cardCity:this.scoreObjCity,cardAnnual:this.scoreObjAnnual,cardDesignations:this.scoreObjDesignations})
    .then(result=>{
        this.scoreRecoreId = result.Id;
        window.console.log('Record Inserted Successfully ' + this.scoreRecoreId);       
        const toastEvent = new ShowToastEvent({
            title:'Success!',
            message:'Record created successfully',
            variant:'success'
          });
          this.dispatchEvent(toastEvent);

          /*Start Navigation*/
          this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.scoreRecoreId,
                objectApiName: 'scoreCard__c',
                actionName: 'view'
            },
         });
         /*End Navigation*/

    })
    .catch(error =>{
       this.errorMsg=error.message;
       window.console.log(this.error);
    });

 }
}