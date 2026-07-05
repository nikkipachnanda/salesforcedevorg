import { LightningElement, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';
import getCases from '@salesforce/apex/CasePriorityController.getCases';
import updateCasePriority from '@salesforce/apex/CasePriorityController.updateCasePriority';

const COLUMNS = [
    { label: 'Case Number', fieldName: 'CaseNumber', type: 'text' },
    { label: 'Subject', fieldName: 'Subject', type: 'text', wrapText: true },
    { label: 'Status', fieldName: 'Status', type: 'text' },
    { label: 'Priority', fieldName: 'Priority', type: 'text' }
];

export default class CasePriorityUpdater extends LightningElement {
    columns = COLUMNS;
    cases = [];
    selectedCaseId;
    selectedPriority;
    isLoading = true;
    wiredCasesResult;

    priorityOptions = [
        { label: 'High', value: 'High' },
        { label: 'Medium', value: 'Medium' },
        { label: 'Low', value: 'Low' }
    ];

    @wire(getCases)
    wiredCases(result) {
        this.wiredCasesResult = result;
        const { data, error } = result;

        if (data) {
            this.cases = data;
            this.isLoading = false;
        } else if (error) {
            this.cases = [];
            this.isLoading = false;
            this.showToast('Error loading Cases', this.getErrorMessage(error), 'error');
        }
    }

    get selectedRows() {
        return this.selectedCaseId ? [this.selectedCaseId] : [];
    }

    get isSaveDisabled() {
        return !this.selectedCaseId || !this.selectedPriority || this.isLoading;
    }

    get hasCases() {
        return this.cases.length > 0;
    }

    handleRowSelection(event) {
        const selectedCase = event.detail.selectedRows[0];
        this.selectedCaseId = selectedCase?.Id;
        this.selectedPriority = selectedCase?.Priority;
    }

    handlePriorityChange(event) {
        this.selectedPriority = event.detail.value;
    }

    async handleSave() {
        this.isLoading = true;

        try {
            await updateCasePriority({
                caseId: this.selectedCaseId,
                priority: this.selectedPriority
            });
            await refreshApex(this.wiredCasesResult);
            this.selectedCaseId = undefined;
            this.selectedPriority = undefined;
            this.showToast('Success', 'Case Priority updated.', 'success');
        } catch (error) {
            this.showToast('Update failed', this.getErrorMessage(error), 'error');
        } finally {
            this.isLoading = false;
        }
    }

    getErrorMessage(error) {
        return error?.body?.message ?? error?.message ?? 'An unexpected error occurred.';
    }

    showToast(title, message, variant) {
        this.dispatchEvent(new ShowToastEvent({ title, message, variant }));
    }
}
