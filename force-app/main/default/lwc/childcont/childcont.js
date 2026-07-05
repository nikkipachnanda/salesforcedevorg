import { LightningElement, api } from 'lwc';

export default class Childcont extends LightningElement {

  @api myName;

  @api headerLabel;



  constructor() {
    super();
    //  load();
    // this.console.log("test");
    // elem.classList.add("active");
    window.addEventListener('onload', this.handleScroll.bind(this));
  }


  @api
  callchildmethod() {
    this.template.querySelectorAll(".aboutCont")[0].classList.add('active');;
    return 'Finished!';
  }


load() {

  //let elem = this.template.querySelectorAll('.childtxt');
}

handleScroll() {
  alert("test");
  this.template.querySelectorAll(".demo")[0].classList.add('active');;
  //console.log(elem);

}

connectedCallback() {
  this.greeting = 'Hello World! 222222';
  // let elem  = this.template.querySelectorAll(".demo")[0];
  // elem.classList.add("active");
  let elem = this.template.querySelectorAll('.childtxt').length;
  alert(elem);

}

renderedCallback()
{
 // this.template.querySelectorAll(".demo")[0].classList.add('active');

}

}