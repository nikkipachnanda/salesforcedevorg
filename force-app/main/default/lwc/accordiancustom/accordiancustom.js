import { LightningElement } from 'lwc';
export default class AccordionExample extends LightningElement {
		
		value = '';

    get options() {
        return [
            { label: 'opt1', value: 'option1' }
        ];
    }
		
		 get optionssnd() {
        return [
            { label: 'opt2', value: 'option2' }
        ];
    }
		
		 get optionsth() {
        return [
            { label: 'opt3', value: 'option3' }
        ];
    }
		
    toggleRow = (event) =>{
        var CurrentRow = event.currentTarget;
        
       /* if(!CurrentRow.classList.contains("activeRow")){
            var recordRows = this.template.querySelectorAll(".RecordRow");
            for(var i=0; i<recordRows.length; i++){
                recordRows[i].classList.remove('activeRow');
            }
        }*/
                
        CurrentRow.classList.toggle('activeRow');
    };

    toggleCollapse = (event) => {
        var recordRows = this.template.querySelectorAll(".RecordRow");
        if(event.currentTarget.checked){
            for(let i=0; i<recordRows.length; i++){
                recordRows[i].classList.add('activeRow');
            }
        }else{
            for(let i=0; i<recordRows.length; i++){
                recordRows[i].classList.remove('activeRow');
            }
        }

    };
}