import { LightningElement, track } from 'lwc';
export default class Trackcmp extends LightningElement {

//two way binding
    name = "zero to hero";
    title ="lwc";

    changeHandler(event) 
    {
        this.title = event.target.value;
    }

// track to used to track values betwen array and object

  @track employee = 
   {
       name:"nitin",
       age:"33",
       post:"manager",
       "address":{
         city:"delhi"
       }
   }

// we should not object the direct object here

//   changeEmpHandler(event) 
//     {
//         this.employee.name = event.target.value;
//     }

// we can use spread operator here

changeEmpHandler(event) 
    {
        this.employee = {...this.employee, "name":event.target.value};
    }

    @track myObject = {
        nestedProperty: {
            deepProperty: 'initial value'
        }
    };

    handleClick() {
        this.myObject.nestedProperty.deepProperty = 'new value'; // This will trigger a re-render
    }

}