import { LightningElement, track } from 'lwc';
export default class Todoapp extends LightningElement {


@track 
toDoTasks =
[
   {id:1, name:"task 1"}
 ];

@track newTask ="add list";
 updateNewTask(event) 
 {
   
     this.newTask = event.target.value;
 }

 addToDoList(event) 
 {

     this.toDoTasks.push[{
         id:this.toDoTasks.length + 1,
         name:this.newTask
     }]

     console.log(this.toDoTasks);
 }
}