import { LightningElement, track } from 'lwc';
import { loadStyle } from 'lightning/platformResourceLoader';
import globalcss from '@salesforce/resourceUrl/globalcss';
import addTodo from '@salesforce/apex/todoApp.addTodo';
import getCurrentTodos from '@salesforce/apex/todoApp.getCurrentTodos';

 

export default class Addtask extends LightningElement {

    @track todos = [];
    
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
                this.fetchTodos();
    }

    addToHandler() {
        const inputBox = this.template.querySelector('lightning-input');
        //   console.log(inputBox.value);

        const todo =
        {
         //   todoId: this.todos.length,
            todoName: inputBox.value,
            done: false,
          //  todoDate: new Date()
        }

          addTodo ({payload: JSON.stringify(todo)}) 
                .then(response =>{
                console.log("Item inserted"); 
                this.fetchTodos();
                })
                

      /*  if (inputBox.value != "") {
            this.todos.push(todo);

            inputBox.value = "";
        }*/
    }

    get upcomingTasks() {
        return this.todos && this.todos.length ? this.todos.filter(todo => !todo.done) : [];
    }

    get completedTasks() {
        return this.todos && this.todos.length ? this.todos.filter(todo => todo.done) : [];
    }

   

    populateToDos() {
        console.log("function loaded");
        const todos = [
            {
                todoId: 0,
                todoName: "Feed the dog",
                done: false,
                todoDate: new Date()
            },
            {
                todoId: 1,
                todoName: "Feed the Cat",
                done: false,
                todoDate: new Date()
            },
            {
                todoId: 2,
                todoName: "Send mail to manager",
                done: true,
                todoDate: new Date()
            }

        ];
        this.todos = todos;
    }

    fetchTodos() 
    {
        getCurrentTodos() 
        .then(result => {
        if(result) 
        {
            console.log(result.length);
            this.todos = result;
        }
            
    })
}
    deleteHandler() 
    {
         this.fetchTodos();

    }

    updateHandler() 
    {
        this.fetchTodos();
    }
}