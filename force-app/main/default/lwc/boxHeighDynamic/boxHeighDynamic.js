import { LightningElement } from 'lwc';
import myCommonStyles from '@salesforce/resourceUrl/globalcss';
import { loadStyle } from 'lightning/platformResourceLoader';

export default class BoxHeighDynamic extends LightningElement {

  constructor() {
        super();
        loadStyle(this, myCommonStyles)
            .then(result => {
                // Possibly do something when load is complete.
            });
    }

    renderedCallback()
    {
        /* let dyheight =this.template.querySelectorAll(".boxA")[1].clientHeight;
            console.log(dyheight);

           this.template.querySelectorAll(".boxA")[0].style.height = dyheight + "px";
           this.template.querySelectorAll(".boxA")[1].style.height = dyheight + "px"; */
maxHeight = 0;
         var x = this.template.querySelectorAll(".slds-grid .salTilesCont");
                   
                   console.log(x.length);

                    for(var i=0; i<x.length; i++){
                    var tileHeight = x[i].clientHeight;
                  var  maxHeight=(tileHeight > maxHeight) ? tileHeight : maxHeight;
                }


                for(var i=0; i<x.length; i++){
                    x[i].style.height = maxHeight + "px";	
                }


    }

}