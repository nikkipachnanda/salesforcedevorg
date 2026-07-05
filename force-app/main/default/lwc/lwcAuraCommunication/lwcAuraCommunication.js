import { LightningElement, api } from 'lwc';

export default class LwcAuraCommunication extends LightningElement {
    @api title;

    callAura() 
    {
        const event = CustomEvent('sendMsg',{
            detail: {
                "msg":"Hello From Lwc"
            }
          
        })
        this.dispatchEvent(event)
    }

}