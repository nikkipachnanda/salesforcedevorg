import { LightningElement } from 'lwc';
import Score_Images from '@salesforce/resourceUrl/slideimages';  

export default class Imagezoom extends LightningElement {
  

        dashboard = Score_Images + '/proimg1.jpg';

    //  parentFun () {
    //       var container = this.template.querySelectorAll(".container");
    //  //  alert(container.length);
    //     var img = this.template.querySelectorAll("img");

    // container.addEventListener("mousemove", onZoom);
    // container.addEventListener("mouseover", onZoom);
    // container.addEventListener("mouseleave", offZoom);
    //  }


     onZoom(e) {
          var img = this.template.querySelectorAll(".img");
        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop;

        // console.log(x, y)

        for(let i=0; i<img.length; i++){
                  img[i].style.transformOrigin = `${x}px ${y}px`;
                   img[i].style.transform = "scale(1.5)";
            }

      
       
    }

     offZoom(e) {
             var img = this.template.querySelectorAll(".img");

               for(let i=0; i<img.length; i++){
                 img[i].style.transformOrigin = `center center`;
                   img[i].style.transform = "scale(1.0)";
            }
     //   img.style.transformOrigin = `center center`;
      //  img.style.transform = "scale(1)";
    }

 showSlides(n) {
  let i;
  let slides = this.template.querySelectorAll(".mySlides");
  let dots = this.template.querySelectorAll(".dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


 renderedCallback(){
    //   this.parentFun();
    //   this.onZoom();
    //   this.offZoom();
 
 }
     






}