import { LightningElement, api } from 'lwc';
export default class Stickynotescmp extends LightningElement {

    @api noteColor = '#fdfd96'; // Default Light Yellow
    @api foldedColor = '#f0c14b'; // Default Folded Corner Color
    @api textColor = '#333'; // Default Text Color   


    get stickyStyle() {
        return `background-color: ${this.noteColor}; color: ${this.textColor};`;
    }

    get foldedStyle() {
        return `border-bottom-color: ${this.foldedColor};`;
    }

}