import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'; 
import NAME_FIELD from '@salesforce/schema/Account.Name'; 
import PHONE_FIELD from '@salesforce/schema/Account.Phone'; 
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import { createRecord} from 'lightning/uiRecordApi';


export default class CreateAccountRecord extends LightningElement {

    name = '';
    phone = '';

    handleChange(event) 
    {
        if(event.target.label=='Name') 
        {
            this.name = event.target.value;
        }

         if(event.target.label=='Phone') 
        {
            this.phone = event.target.value;
        }
    }  

    createAccount() 
    {
        const fields = {};
        fields[NAME_FIELD.fieldApiName] = this.name;
        fields[PHONE_FIELD.fieldApiName] = this.phone;
        const recordInput = {apiName:ACCOUNT_OBJECT.objectApiName, fields};

        createRecord(recordInput).then(account =>{
              this.accountId = account.id;
             this.dispatchEvent(
              new ShowToastEvent({
                       title:'Success',
                       message:'Account created',
                       variant: 'success',
                       mode:'pester'
                   }),
                   console.log("recored saved")
        );

        })
        .catch(error => {
                this.dispatchEvent(
                   new ShowToastEvent({
                       title:'Error Creating Record',
                    // message:error.body.message,
                       variant: error,
                   })
                   );
            });
        
      
    }  

}