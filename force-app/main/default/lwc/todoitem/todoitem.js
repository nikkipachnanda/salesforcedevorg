import { LightningElement, api, track } from 'lwc';
import deleteTodo from '@salesforce/apex/todoApp.deleteTodo';
import updateTodo from '@salesforce/apex/todoApp.updateTodo';

export default class Todoitem extends LightningElement {

    @track isToggleActive = true; // Default checked

    toggleBtn(event) {
        this.isToggleActive = event.target.checked;
    }

    get mayContainClass() {
        return this.isToggleActive ? 'grey' : 'grey bold';
    }

    get containClass() {
        return this.isToggleActive ? 'grey bold' : 'grey';
    }




}