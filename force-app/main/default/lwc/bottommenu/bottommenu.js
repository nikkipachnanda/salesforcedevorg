import { LightningElement } from 'lwc';
export default class Bottommenu extends LightningElement {

    openMenu = (event) =>{
        var CurrentRow = event.currentTarget;
        CurrentRow.classList.add('activeRow');
          let bottomMenu =this.template.querySelectorAll(".bottomMenu")[0];

        bottomMenu.classList.remove('dspn');
    };

     closeMenu = (event) =>{
        var CurrentRow = event.currentTarget;
        let bottomMenu =this.template.querySelectorAll(".bottomMenu")[0];
        bottomMenu.classList.add('dspn');
        
    };


    
}