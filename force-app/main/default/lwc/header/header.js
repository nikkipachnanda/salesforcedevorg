import { LightningElement } from 'lwc';

export default class Header extends LightningElement 

{

addClassHandler() 
    {
        const addClass = new CustomEvent('addclass');
        this.dispatchEvent(addClass);
    }

    

}