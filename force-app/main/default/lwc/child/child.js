import { LightningElement, wire, api, track } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import upsertContact from '@salesforce/apex/FormData.createContact';
import CONTACT_OBJECT from '@salesforce/schema/Contact';

export default class Poc extends LightningElement {
    @track contactRecord = {};

    handleFieldChange(e) {
        this.contactRecord[e.currentTarget.fieldName] = e.target.value;
    }

    upsertCon() {
        upsertContact({ con: { ...this.contactRecord, sobjectType: CONTACT_OBJECT.objectApiName } })
            .then((contact) => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Contact upserted from apex => ' + contact.Id,
                        variant: 'success'
                    })
                );
            })
            .catch((err) => console.error(err));
    }

    saveForm() {
        // if(this.validated())
        console.log('Contact for save => ', JSON.stringify(this.contactRecord));
        createRecord({ apiName: CONTACT_OBJECT.objectApiName, fields: this.contactRecord })
            .then(contact => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Contact created from saveForm => ' + contact.id,
                        variant: 'success'
                    })
                );
            })
            .catch((error) => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error creating record',
                        message: error.body.message,
                        variant: 'error'
                    })
                );
            });
    }
}