import { LightningElement } from 'lwc';
export default class Tabletddynamicheight extends LightningElement {

    renderedCallback(){
   //     const tdcol1 = this.template.querySelector('.tabTddata1').offsetWidth + "px";
   //   //  const tdcolVal1 = tdcol1.offsetWidth + "px";

   //     const tdcol2 = this.template.querySelector('.tabTddata2').offsetWidth + "px";
   //   //  const tdcolVal2 = tdcol2.offsetWidth + "px"; 

   //     const tdcol3 = this.template.querySelector('.tabTddata3').offsetWidth + "px";
   //  //   const tdcolVal3 = tdcol3.offsetWidth + "px"; 

   //     const tdcol4 = this.template.querySelector('.tabTddata4').offsetWidth + "px";
   //  //   const tdcolVal4 = tdcol4.offsetWidth + "px"; 

   //     const tdcol5 = this.template.querySelector('.tabTddata5').offsetWidth + "px";
   //  //   const tdcolVal5 = tdcol5.offsetWidth + "px"; 

   //      this.template.querySelector('.tabHeading1').style.width = tdcol1; 
   //      this.template.querySelector('.tabHeading2').style.width = tdcol2; 
   //      this.template.querySelector('.tabHeading3').style.width = tdcol3; 
   //      this.template.querySelector('.tabHeading4').style.width = tdcol4; 
   //      this.template.querySelector('.tabHeading5').style.width = tdcol5; 

      // Get the table element
  var table = this.template.querySelectorAll('.slds-table');

  // Initialize variables to store cell widths
  var widthCell1, widthCell2, widthCell3;

  // Iterate through each row in the table
  for (var i = 0; i < table.rows?.length; i++) {
    // Iterate through each cell in the row
    for (var j = 0; j < table.rows[i].cells?.length; j++) {
      // Get the cell
      var cell = table.rows[i].cells[j];

      // Get the width of the cell
      var cellWidth = cell.offsetWidth;

      // Assign the width to the corresponding variable based on the cell's ID
      if (cell.id === "cell1") {
        widthCell1 = cellWidth;
      } else if (cell.id === "cell2") {
        widthCell2 = cellWidth;
      } else if (cell.id === "cell3") {
        widthCell3 = cellWidth;
      }
    }
  }

  // Now, you have the width of each cell in the variables: widthCell1, widthCell2, and widthCell3
  console.log("Width of Cell 1:", widthCell1);
  console.log("Width of Cell 2:", widthCell2);

}
}