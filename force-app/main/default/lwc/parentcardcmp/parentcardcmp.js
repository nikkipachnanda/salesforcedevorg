import { LightningElement } from 'lwc';
export default class Parentcardcmp extends LightningElement {
    cards = [
        {
            id: 1,
            title: 'Productivity Boost',
            subtitle: 'Improve daily workflow efficiency.',
            buttonLabel: 'Start Now',
            showButton: true,
            backgroundColor: '#f0f8ff',
            textColor: '#003366'
        },
        {
            id: 2,
            title: 'Mindfulness',
            subtitle: 'Practice calmness and focus.',
            buttonLabel: 'Learn More',
            showButton: true,
            backgroundColor: '#fff8dc',
            textColor: '#6b4226'
        },
        {
            id: 3,
            title: 'Fitness Goals',
            subtitle: 'Track and achieve fitness targets.',
            buttonLabel: 'Track Now',
            showButton: true,
            backgroundColor: '#e0f7fa',
            textColor: '#00796b'
        },
        {
            id: 4,
            title: 'Financial Planning',
            subtitle: 'Secure your future with wise decisions.',
            buttonLabel: 'Plan',
            showButton: true,
            backgroundColor: '#ff00',
            textColor: '#586e75'
        },
        {
            id: 5,
            title: 'Spiritual Growth',
            subtitle: 'Explore inner peace and purpose.',
            buttonLabel: 'Explore',
            showButton: true,
            backgroundColor: '#ede7f6',
            textColor: '#4527a0'
        }
    ];

    handleCardClick(event) {
        console.log('Card button clicked:', event.detail);
    }
}