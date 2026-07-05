import { LightningElement, track } from 'lwc';
export default class Accordiansingle extends LightningElement {
		
		@track clickedButtonLabel = 'Show';  
    @track boolVisible = false;  
  	@track iconName = 'utility:chevrondown';
    handleClick(event) {  
        const label = event.target.label;  
  
        if ( label === 'Show' ) {  
  
            this.clickedButtonLabel = 'Hide';  
            this.boolVisible = true;  
						this.iconName = 'utility:chevronup';
  
        } else if  ( label === 'Hide' ) {  
              
            this.clickedButtonLabel = 'Show';  
            this.boolVisible = false;  
						this.iconName = 'utility:chevrondown';
  
        }  
    }
}