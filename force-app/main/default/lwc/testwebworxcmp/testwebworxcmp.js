import { LightningElement, wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { getRecord } from 'lightning/uiRecordApi';
import webworxCss from '@salesforce/resourceUrl/webworxcss';
import { loadStyle } from 'lightning/platformResourceLoader';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

const ACCOUNT_ID = '001dL00002IiZWYQA3';

export default class Testwebworxcmp extends LightningElement {
    styleLoaded = false;
    accountRecord;
    accountError;

    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    accountObjectInfo;

    @wire(getRecord, {
        recordId: ACCOUNT_ID,
        layoutTypes: ['Full'],
        modes: ['View']
    })
    wiredAccount({ data, error }) {
        if (data) {
            this.accountRecord = data;
            this.accountError = undefined;
        } else if (error) {
            this.accountRecord = undefined;
            this.accountError = error;
        }
    }

    get accountName() {
        return this.accountRecord?.fields?.Name?.value ?? 'Account';
    }

    get accountFields() {
        if (!this.accountRecord || !this.accountObjectInfo.data) {
            return [];
        }

        const fieldMetadata = this.accountObjectInfo.data.fields;

        return Object.entries(this.accountRecord.fields)
            .map(([apiName, field]) => ({
                apiName,
                label: fieldMetadata[apiName]?.label ?? apiName,
                value: this.formatFieldValue(field)
            }))
            .sort((first, second) => first.label.localeCompare(second.label));
    }

    get hasAccountFields() {
        return this.accountFields.length > 0;
    }

    get isLoading() {
        return !this.accountRecord && !this.accountError;
    }

    formatFieldValue(field) {
        const value = field.displayValue ?? field.value;

        if (value === null || value === undefined || value === '') {
            return 'Not provided';
        }

        if (typeof value === 'boolean') {
            return value ? 'Yes' : 'No';
        }

        return String(value);
    }

    renderedCallback() {
        if (this.styleLoaded) {
            return;
        }

        this.styleLoaded = true;
        loadStyle(this, webworxCss).catch((error) => {
            this.styleLoaded = false;
            console.error('Unable to load the WebWorx CSS static resource.', error);
        });
    }
}
