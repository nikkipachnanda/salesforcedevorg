import { LightningElement } from 'lwc';
export default class Tableonscroll extends LightningElement {



     handleScrollUp (e) 
    {   
      alert("scroll event");
       

    //  if (e.keyCode == '37') {
    //       console.log("left key");
    //    let el = this.template.querySelectorAll('.combo')[0];
    //     el.classList.remove("comboHideMenu");
         
    // }
    // else if (e.keyCode == '39') {
    //     let el = this.template.querySelectorAll('.combo')[0];
    //     el.classList.remove("comboHideMenu");
    //       console.log("right key");
    // }

        let el = this.template.querySelectorAll('.test')[0];
                alert(el.lenghth);
          el.classList.remove("stickyClass");
  
    }
    


      renderedCallback(){
  
   //     window.addEventListener('keydown', this.handleScrollUp.bind(this) );
      // window.addEventListener('click', this.handleClick.bind(this) );
        

            window.onscroll = (e) => { 
                
                    let l = e.currentTarget.scrollLeft;

                    alert(l);
                
                     let el = this.template.querySelectorAll('.test')[0];
                alert(el.lenghth);
          el.classList.remove("stickyClass");
             }
      
    }


}