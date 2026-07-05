import { LightningElement, track } from 'lwc';

export default class CustomDropdown extends LightningElement {
    @track selectedOption;
    @track isOpen = false;

    options = [
        { label: 'Task priority', value: 'Task priority' },
        { label: 'Task due date', value: 'Task due date' },
     
    ];

      connectedCallback() {
        this.selectedOption = this.options[0].label;
        // Add event listener to close dropdown when clicking outside
         document.addEventListener('click', this.handleDocumentClick);
    }

    disconnectedCallback() {
        // Remove event listener when component is removed
        document.removeEventListener('click', this.handleDocumentClick);
    }



  toggleDropdown = (e) => {
      e.stopPropagation();
        this.isOpen = !this.isOpen;
        console.log('Dropdown Opened:', this.isOpen);
    }

    handleOptionClick(event) {
        
        this.selectedOption = event.target.dataset.value;
        this.isOpen = false;
    }

    //    handleDocumentClick = (event) => {
    //         const clickedInsideDropdown = this.template.querySelectorAll('.customcont-dropdown');

    //          const elem = clickedInsideDropdown.length;

    //         // alert(elem);
    //     //    console.log(clickedInsideDropdown);
    // // Close the dropdown if the click is outside of the dropdown
    // // if (!clickedInsideDropdown) {
    // //     this.isOpen = false;
    // // }  

    //       //  alert(elem);
                
    //          if(elem > 0) {
    //              this.isOpen = false;
    //          }
    //         //  return clickedInsideDropdown;

    // };


     handleDocumentClick = (event) => {
        // Close the dropdown if the click is outside of the dropdown
        if (!this.template.querySelector('.custom-dropdown').contains(event.target)) {
            this.isOpen = false;
        }
    };

 
       //   alert(isClickedInsideDropdown);

}