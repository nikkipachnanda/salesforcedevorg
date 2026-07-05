import { LightningElement } from 'lwc';
export default class ToggleBtn extends LightningElement {


     iconName = "utility:add";
     boolVisible = false;

    constructor() {
        super();
            loadStyle(this, myCommonStyles)
            .then(result => {
                // Possibly do something when load is complete.
            });


    }

    
    toggleBtn(e) 
    {
        let label = e.target.iconName;

        if ( label === "utility:add") 
        {
            this.iconName = "utility:dash";
            this.boolVisible = true;
        }

        else if ( label === "utility:dash") 
        {
            this.iconName = "utility:add";
            this.boolVisible = false;
        }

       // alert(btntoggle);
       // btntoggle.classList.toggle('toggleBtn');
    }

    //Secon option for toggle
   // label.parentNode.classList.toggle('toggleBtn');

}