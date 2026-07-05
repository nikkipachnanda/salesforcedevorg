import { LightningElement, track } from 'lwc';
import myCommonStyles from '@salesforce/resourceUrl/teamhub';
import { loadStyle } from 'lightning/platformResourceLoader';

export default class GraphTable extends LightningElement {

  //   @track sepheight = 0; 
    constructor() {
        super();
        loadStyle(this, myCommonStyles)
            .then(result => {
                // Possibly do something when load is complete.
            });

  // window.addEventListener('scroll', this.myFunction.bind(this));
      
    }


         connectedCallback() {
      //  this.myFunction();
        console.log("connected callback called");
  // var loadData =  setTimeout( this.myFunction, 5000);
      // window.addEventListener( this.myFunction.bind(this));
    }       

renderedCallback(){
          this.myFunction();
         
         //  if (hasRendered) {


           
               
       //    }
      

         //   let dyheight = this.template.querySelectorAll(".chidlTableCont td")[0].clientHeight;

                console.log("hello");
       
       //    this.template.querySelectorAll(".chidlTableCont td")[0].style.height = dyheight + "px";
            
                     
        }

      

        myFunction() {
            

            var x = this.template.querySelectorAll(".myTeamInnerCont");
            var sep = this.template.querySelectorAll(".sep");
                   
                   for(var i=0; i<x.length; i++){
                    var sepheight = x[i].offsetHeight;
            //      var  maxHeight=(tileHeight > maxHeight) ? tileHeight : maxHeight;
                    console.log(sepheight);
                }

             for(var i=0; i<sep.length; i++){
                    sep[i].style.height = sepheight + 13 + "px";	
                }
                  
        }


   
        
}