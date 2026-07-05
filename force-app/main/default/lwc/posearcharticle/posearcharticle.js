import { LightningElement } from 'lwc';
export default class Posearcharticle extends LightningElement {
		
		toggleRow = (event) =>{
        var CurrentRow = event.currentTarget;
      
        CurrentRow.classList.toggle('activeRow');
    };

   
}