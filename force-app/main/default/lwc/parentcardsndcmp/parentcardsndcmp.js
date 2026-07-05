import { LightningElement } from 'lwc';
export default class Parentcardsndcmp extends LightningElement {
    showCardButton = true;

    handleCardClick() {
        console.log('ReusableCard button clicked!');
        // Add custom logic here
    }

    extraAction() {
        console.log('Extra action inside slot clicked!');
    }
}