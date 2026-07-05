import { LightningElement, wire } from 'lwc';
import {getListUi} from 'lightning/uiListApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import EMAIL_OBJECT from '@salesforce/schema/Contact.Email';

export default class GetListUi extends LightningElement {
    contacts = [];

    @wire(getListUi, {
        objectApiName:CONTACT_OBJECT,
        listViewApiName:'AllContacts',
        pageSize:10,
        sortBy:EMAIL_OBJECT
    })
    
    listViewHandler({data,error }) {
        if(data) {
            console.log(data);
            this.contacts = data.records.records;
        }

        if(error) {
            console.log(error);
        }
    }

}