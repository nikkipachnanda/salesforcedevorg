import { LightningElement, track } from 'lwc';

export default class Showactivebtnonviewmore extends LightningElement {
    @track showAll = false;
    @track showTooltip = false;

    allStages = [
        { id: 1, label: 'Initial', status: 'completed' },
        { id: 2, label: 'Probable', status: 'inprogress' },
        { id: 3, label: 'State3', status: 'notStarted' },
        { id: 4, label: 'State4', status: 'notStarted' },
        { id: 5, label: 'State5', status: 'notStarted' },
        { id: 6, label: 'State6', status: 'notStarted' },
        { id: 7, label: 'State7', status: 'completed' },
        { id: 8, label: 'State8', status: 'completed' },
        { id: 9, label: 'State9', status: 'notStarted' },
        { id: 10, label: 'State10', status: 'notStarted' },
        { id: 11, label: 'State11', status: 'notStarted' },
        { id: 12, label: 'State12', status: 'notStarted' },
        { id: 13, label: 'Final', status: 'notStarted' }
    ];

    get visibleStages() {
        return this.allStages.slice(0, 4).map(stage => ({
            ...stage,
            class: this.getStageClass(stage.status)
        }));
    }

    get remainingStages() {
        return this.allStages.slice(4).map(stage => ({
            ...stage,
            class: this.getStageClass(stage.status)
        }));
    }

    get totalCompletedCount() {
        return this.allStages.filter(stage => stage.status === 'completed').length;
    }

    get remainingCompletedCount() {
        return this.remainingStages.filter(stage => stage.status === 'completed').length;
    }

    toggleView() {
        this.showAll = !this.showAll;
    }

    get viewAllLabel() {
        return this.showAll ? 'Show Less' : `View All (${this.remainingStages.length})`;
    }

    handleHover() {
        this.showTooltip = true;
    }

    handleMouseOut() {
        this.showTooltip = false;
    }

    getStageClass(status) {
        return status === 'completed' ? 'markedComplete leftRoundBorder indicatorSize' :
               status === 'inprogress' ? 'taskInprogress indicatorSize LRWhtBorder' :
               'taskNotStarted indicatorSize';
    }
}