import { LightningElement } from 'lwc';
export default class Tableoverflowdynamic extends LightningElement {
tableClass ='';
    countRow() 
    {
       // debugger;
        let table = this.template.querySelectorAll('.tableCont');
         
        table.forEach(currentItem => {
            const rows = currentItem.querySelectorAll("tr");
          // alert(rows.length);
         if (rows.length < 6) {
            
          // this.template.querySelectorAll('table').classList?.add("tableContOI");
            this.tableClass = 'activeclass';

        }
        else {
            this.template.querySelectorAll('.tableCont').classList?.remove("tableContOI");
            this.tableClass='';
        }
        });

      
    }

     value = 'inProgress';

    get options() {
        return [
            { label: 'New', value: 'new' },
            { label: 'In Progress', value: 'inProgress' },
            { label: 'Finished', value: 'finished' },
        ];
    }

    handleChange(event) {
        this.value = event.detail.value;
    }

    renderedCallback() 
    {
        this.countRow();
    }
}