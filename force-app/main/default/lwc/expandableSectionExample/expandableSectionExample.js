import { LightningElement } from 'lwc';
import { loadStyle } from 'lightning/platformResourceLoader';
import globalcss from '@salesforce/resourceUrl/globalcss';


export default class ExpandableSectionExample extends LightningElement {


connectedCallback() {
    
        Promise.all([
            loadStyle(this, globalcss)
        ]).then(() => {
            console.log("css loaded");
        })
            .catch(error => {
                console.log("error");
            });
                console.log("data loaded");
             //   this.populateToDos();
              
    }

    sections = [
        {
            id: 1,
            label: 'Section 1 in Iteration',
            labeltxt: 'Section 1 in Iteration11111'
        },
        {
            id: 2,
            label: 'Section 2 in Iteration'
        },
        {
            id: 3,
            label: 'Section 3 in Iteration'
        }
    ]
}