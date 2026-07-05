import { LightningElement } from 'lwc';
export default class GetterCmp extends LightningElement {

    //{num * num1} user[0] is not possible in salesforce without getter method
    // Get method are to use manipulate customize data in html 

    users = ["john", "smith", "nik"];
    num1 = 10;
    num2 = 20;

    get firstUser() 
    {
        return this.users[0];
    }

    get multiply() {
        return this.num1 * this.num2;
    }



}