import { LightningElement, wire } from 'lwc';
import getMyLeaves from '@salesforce/apex/LeaveRequestController.getMyLeaves';

const COLUMNS = [
 {label:'Request Id', fieldName:'Name', cellAttributes: { class: { fieldName: 'cellClass'} }},
 {label:'From Date', fieldName:'From_Date__c', cellAttributes: { class: { fieldName: 'cellClass'} }},
 {label:'To Date', fieldName:'To_Date__c', cellAttributes: { class: { fieldName: 'cellClass'} }},
 {label:'Reason', fieldName:'Reason__c', cellAttributes: { class: { fieldName: 'cellClass'} }},
 { label: 'Status', fieldName: 'Status__c', cellAttributes: { class: { fieldName: 'cellClass'} } },
 {label:'Manager Comment', fieldName:'Manager_Comment__c', cellAttributes: { class: { fieldName: 'cellClass'} }},
 {
    type:"button",
    typeAttributes: {
        label:"Edit",
        name:"Edit",
        title:"Edit",
        value:"Edit"
    }, cellAttributes: { class: { fieldName: 'cellClass'} }
 }
]



export default class Leavetrackermyleaves extends LightningElement {
    columns = COLUMNS;
    myLeaves = [];
    myLeavesWireResult;

    @wire(getMyLeaves)
    wiredMyLeaves(result){
        this.myLeavesWireResult = result;
        if(result.data){
            this.myLeaves = result.data.map(leave => ({
             ...leave,
             cellClass: leave.Status__c == 'Approved' ? 'slds-theme_success' : leave.Status__c == 'Rejected' ? 'slds-theme_error' : 'slds-theme_warning',   
             isEditDisabled: leave.Status__c != 'Pending'
            }));
        }
        if(result.error){
            console.error("Error occured while fetching my leaves" + result.error);
        }
    }

    get noRecordsFound() {
        return this.myLeaves.length == 0;
    }
    
}