import { LightningElement, track } from 'lwc';
import myCommonStyles from '@salesforce/resourceUrl/commexcss';
import { loadStyle } from 'lightning/platformResourceLoader';

export default class Imagescrollnextprev extends LightningElement {
    @track currentIndex = 0;
    tiles = [
        { id: 1, category: 'Fruit', range: 'Tropical Fruit', status: 'Overdue', statusClass: 'statusOverdue', subText: 'Send initial letter', dueDate: 'Task Due 22 April 2024' },
        { id: 2, category: 'Beef', range: 'Sausage Pre-pack', status: 'Overdue', statusClass: 'statusOverdue', subText: 'Commence range review', dueDate: 'Task Due 22 April 2024' },
        { id: 3, category: 'Vegetables', range: 'Salad/Vegetables', status: 'In progress', statusClass: 'statusInprogress', subText: 'Range review details', dueDate: 'Task Due 22 April 2024' },
        { id: 4, category: 'Ice cream', range: 'Frozen desserts', status: 'Overdue', statusClass: 'statusOverdue', subText: 'Send initial letter', dueDate: 'Task Due 22 April 2024' },
        { id: 5, category: 'Ice cream', range: 'Frozen desserts2', status: 'Overdue', statusClass: 'statusOverdue', subText: 'Send initial letter', dueDate: 'Task Due 22 April 2024' },
        { id: 6, category: 'Ice cream', range: 'Frozen desserts3', status: 'Overdue', statusClass: 'statusOverdue', subText: 'Send initial letter', dueDate: 'Task Due 22 April 2024' },
        { id: 7, category: 'Ice cream', range: 'Frozen desserts4', status: 'Overdue', statusClass: 'statusOverdue', subText: 'Send initial letter', dueDate: 'Task Due 22 April 2024' },
        { id: 8, category: 'Ice cream', range: 'Frozen desserts5', status: 'Overdue', statusClass: 'statusOverdue', subText: 'Send initial letter', dueDate: 'Task Due 22 April 2024' },
        { id: 9, category: 'Ice cream', range: 'Frozen desserts6', status: 'Overdue', statusClass: 'statusOverdue', subText: 'Send initial letter', dueDate: 'Task Due 22 April 2024' }
    ];

    previousSlide() {
        if (this.currentIndex > 0) {
            this.currentIndex--; // Move one tile back
        }
    }

    nextSlide() {
        if (this.currentIndex < this.tiles.length - 1) {
            this.currentIndex++; // Move one tile forward
        }
    }

    constructor() {
        super();
        loadStyle(this, myCommonStyles).then(() => {
            // Handle styles load success
        });
    }

    get transformStyle() {
        return `transform: translateX(-${this.currentIndex * 350}px); transition: transform 0.5s ease-in-out;`;
    }
}