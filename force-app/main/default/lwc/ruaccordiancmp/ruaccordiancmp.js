import { LightningElement, api } from 'lwc';
import { loadStyle } from 'lightning/platformResourceLoader';
import globalcss from '@salesforce/resourceUrl/globalcss';


export default class ExpandableSection extends LightningElement {
    @api id;
    @api label;
    @api labeltxt;

    toggleSection(event) {
        let buttonid = event.currentTarget.dataset.buttonid;
        let currentsection = this.template.querySelector('[data-id="' + buttonid + '"]');
        if (currentsection.className.search('slds-is-open') == -1) {
            currentsection.className = 'slds-section slds-is-open';
        } else {
            currentsection.className = 'slds-section slds-is-close';
        }
    }


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


    toggleClass(e) 
    {
       let addClass = this.template.querySelectorAll('.arwBtn')[0];
   //   let buttonid = event.currentTarget.dataset.buttonid;
        let pClass = e.currentTarget.parentNode;
       // let pNode = addClass.parentNode.parentNode.nodeName;
      
       console.log(addClass.length);
        
        addClass.classList.toggle("icnRotate");
     //  pClass.classList.toggle("accrRow");
      //  pNode.classList.toggle("childNode");
       // console.log(sNode);
    }
}