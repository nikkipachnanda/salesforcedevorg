import { LightningElement, track, wire  } from 'lwc';
import getAccountList from '@salesforce/apex/GetAccountData.getAccountList';
export default class Person extends LightningElement 
{
    @track accounts;
    @track error;

    @wire(getAccountList)
    wiredAccounts({data }) {
        if (data) {
            this.accounts = data;          
}
    }
}