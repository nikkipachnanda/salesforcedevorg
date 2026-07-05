import { LightningElement, track, wire } from 'lwc';
import {  createRecord} from 'lightning/uiRecordApi';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import getAllEmployees from '@salesforce/apex/accountManager.getEmployees';


export default class CreateRecord extends LightningElement 
{
    @track name;
    @track designation;
    @track age;

    @track emplist;
    @track error;

    nameHandler(event) 
    {
        this.name = event.target.value;
    }

    phoneHandler(event) 
    {
        this.designation = event.target.value;
    }

    ageHandler(event) 
    {
        this.age = event.target.value;
    }

      showSuccessToast() {
        const evt = new ShowToastEvent({
            title: 'Toast Success',
            message: 'Opearion sucessful',
            variant: 'success',
            mode: 'dismissable'
        });
        this.dispatchEvent(evt);
    }
    

   

    createAccount() 
    {
        console.log("record created");
        const fields ={'Name':this.name, 'designation__c': this.designation, 'age__c': this.age};
        const recordInput= {apiName:'empdata__c', fields};
         
    
        createRecord(recordInput).then(response =>
            {
               this.dispatchEvent(
            new ShowToastEvent({
            title : 'Success',
            message : 'Records saved successfully!',
            variant : 'success',
            }),
            )
                            console.log('account has been created', response.id);
                            
                
            }).catch(error => {
                this.dispatchEvent(
                   new ShowToastEvent({
                       title:'Error Creating Record',
                       message:error.body.message,
                       variant: error,
                   })
                   );
            });
            
       
    }

     @wire (getAllEmployees) newLocalMethod({ 
       error, data 
    }) {
        if(data) { this.emplist = data}
        if (error) {this.error= error}
    }

   
}