import { LightningElement } from 'lwc';
export default class ChildMethodFromParent extends LightningElement {

    handleClick() {
        this.template.querySelector('c-child-method-slider').resetSlider();
    }
}