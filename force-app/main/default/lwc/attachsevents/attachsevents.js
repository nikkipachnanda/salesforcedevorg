import { LightningElement } from 'lwc';
export default class Attachsevents extends LightningElement {

  handleMouseMove() {
        console.log("mouseMoveAttached function");
    }

    isFirstClick = true;
    
    handleClick(){
        if(this.isFirstClick) 
        {
             console.log("attached");
            window.addEventListener('mousemove', this.handleMouseMove);
        }
        else {
            console.log("removed");
            window.removeEventListener('mousemove', this.handleMouseMove);
        }
        this.isFirstClick = !this.isFirstClick;
    }

  
}