import { LightningElement, track} from 'lwc';
import getAllAccounts from '@salesforce/apex/accountManager.getAccount';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class AccountManagerApex extends LightningElement 
{

    @track numberOfRecords;
    @track accounts;

    numberofAccountChangeHandler(event) 
    {
        this.numberOfRecords = event.target.value;
    }

    getAccounts() 
    {
        getAllAccounts({numberOfRecords:this.numberOfRecords}).then(response =>
        {
            this.accounts = response;
            const toastEvent = new ShowToastEvent({
                title:'Account Loaded',
                message:this.numberOfRecords + 'Accounts fetch from server',
                variant:'success',
            });
            this.dispatchEvent(toastEvent);
        });
    }
}