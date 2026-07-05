import { LightningElement } from 'lwc';
export default class Aicmp extends LightningElement {
    steps = [
        { id: 1, isCompleted: true, isLast: false, circleClass: 'step-circle completed' },
        { id: 2, isCompleted: false, isLast: false, circleClass: 'step-circle upcoming' },
        { id: 3, isCompleted: false, isLast: true, circleClass: 'step-circle upcoming' },
    ];

    taskSteps = [
        {
            id: 1,
            title: 'Initial',
            date: '10 Sep 2025',
            tags: ['CM', 'ACM', 'CA']
        },
        {
            id: 2,
            title: 'Probable',
            date: '24 Jul 2025',
            tags: ['CM', 'ACM', 'CA']
        },
        {
            id: 3,
            title: 'Interim Final',
            date: '24 Sep 2025',
            tags: ['CM', 'ACM', 'CA']
        },
        {
            id: 4,
            title: 'Final',
            date: '24 Feb 2025',
            tags: ['CM', 'ACM', 'CA']
        },
    ];
}