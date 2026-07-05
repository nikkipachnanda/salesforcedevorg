import { LightningElement } from 'lwc';

const addVal = function (inputval1, inputval2)
{
        console.log("common function");
     //let addcl =  this.template.querySelectorAll(".wrapper")[0];
        //console.log(addcl.length);
        return parseFloat(inputval1) + parseFloat(inputval2);
        
}

const mulVal = function (inputval1, inputval2)
{
        console.log("common function");
     //let addcl =  this.template.querySelectorAll(".wrapper")[0];
        //console.log(addcl.length);
        return parseFloat(inputval1) * parseFloat(inputval2);
        
}


export {addVal, mulVal};