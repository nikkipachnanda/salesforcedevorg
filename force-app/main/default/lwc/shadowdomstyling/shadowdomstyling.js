import { LightningElement } from 'lwc';
export default class Shadowdomstyling extends LightningElement {

        isLoaded = false;

        renderedCallback(){
            this.appendClass();
           
        }

        appendClass() {
             if(this.isLoaded) return;

            console.log("render callback called");
            const style= document.createElement('style');
            const style1= document.createElement('style');

            style.innerText = `.btn button
            {
                background:#f00;
                color:#fff;
            }
            `

             style1.innerText = `.btn1 button
            {
                border:1px #f00 solid;
                color:#000;
            }
            `
          this.template.querySelector('lightning-button').appendChild(style);
           this.template.querySelector('lightning-button').appendChild(style1);

                   this.isLoaded = true;
        }
}