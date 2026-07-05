import { LightningElement, api } from 'lwc';

export default class Sliderlwc extends LightningElement {

    @api autoScroll = false;
    @api customHeight = '500px';
    @api customWidth = '500px';
    @api hideNavigationButtons = false;
    @api hideNavigationDots = false;
    @api hideSlideNumber = false;
    @api hideSlideText = false;
    // @api scrollDuration = 3000;


    @api imageUrl;
    @api zoomLevel = 1;
    @api minZoomLevel = 1;
    @api maxZoomLevel = 4;
    dragvalue;
    scale;
    isDragging = false;

    get imageContainerStyle() {
        return `transform: scale(${this.scale});`;
    }

    get imageStyle() {
        // You can apply additional styles to the image here if needed
        return '';
    }

    handleZoomIn() {
        this.scale +=1;
    }

    handleZoomOut() {
       if (this.scale > 1) { // Minimum zoom threshold
            if(1 < this.scale - 1){
                this.scale -= 1;
            }else{
                this.scale = 1;
            }
            
        }
    }

   // containerStyle = 'width: 500px; height: 500px; overflow: hidden; position: relative;';
   // imageStyle = 'width: 100%; height: 100%; transition: transform 0.3s ease;';

    isPanning = false;
    startX = 0;
    startY = 0;
    offsetX = 0;
    offsetY = 0;
    dragvalue = true;

    handleMouseDown(event) {
       console.log("onmousedown");
        this.isPanning = true;
        this.startX = event.clientX;
        this.startY = event.clientY;
        this.dragvalue = false;
        var img = this.template.querySelectorAll(".img");
        for (let i = 0; i < img.length; i++) {
              img[i].style.cursor = 'grabbing';
              
           
        }
    

      //  this.template.querySelector('.img').style.cursor = 'grabbing';
    }

    handleMouseUp() {
      //  this.dragvalue = false;
        this.isPanning = false;
           var img = this.template.querySelectorAll(".img");
        for (let i = 0; i < img.length; i++) {
              img[i].style.cursor = 'pointer';
              
           
        }
      //  this.template.querySelector('.img').style.cursor = 'pointer';
    }

    // handleMouseMove(event) {
    //     if (this.isPanning) {
    //         const deltaX = event.clientX - this.startX;
    //         const deltaY = event.clientY - this.startY;
    //         this.offsetX += deltaX;
    //         this.offsetY += deltaY;
    //         this.startX = event.clientX;
    //         this.startY = event.clientY;
    //         this.updateImageTransform();
    //     }
    // }

     handleMouseMove(e) {
          
      
        if (this.isPanning) {

            
        // event.preventDefault(); // Prevent default behavior
         //     this.dragvalue = true;
         //   event.preventDefault();
            // const deltaX = event.clientX - this.startX;
            // const deltaY = event.clientY - this.startY;
            // this.offsetX += deltaX;
            // this.offsetY += deltaY;
            // this.startX = event.clientX;
            // this.startY = event.clientY;


            // this.updateImageTransform();

             var img = this.template.querySelectorAll(".img");
        // const x = e.clientX - e.target.offsetLeft;
        // const y = e.clientY - e.target.offsetTop;

        //  const xa = x - 320;

         var magniArea = this.template.querySelector(".slideContainer");

        // const x = (e.offsetX / magniArea.offsetWidth) * 100;
        // const y = (e.offsetY / magniArea.offsetHeight) * 100;
        // // console.log(x, y)

          const { offsetX, offsetY, target } = e;

          console.log(offsetY);

        //  if ( offsetY < 280) {
        //      dragvalue = false;
        //  }

        //   if ( offsetY > 280) {
        //      dragvalue = true;
        //  }

        const { offsetWidth: width, offsetHeight: height } = target;
        const x = (offsetX / width) * 100;
        const y = (offsetY / height) * 100;

        for (let i = 0; i < img.length; i++) {
              img[i].style.transformOrigin = `${x}% ${y}%`;
                img[i].style.cursor = 'grabbing';
               // img[i].style.zIndex = 1000;
                   img[i].style.p = 1000;
              //  this.dragvalue = false;
        }

        
        }
    }

    updateImageTransform() {
        const imageElement = this.template.querySelectorAll('.img');
        const transformValue = `scale(${this.zoomLevel}) translate(${this.offsetX}px, ${this.offsetY}px)`;
       

          for (let i = 0; i < imageElement.length; i++) 
          {
               imageElement[i].style.transform = transformValue;
           }
    }

    handleWheel(event) {
        event.preventDefault();
        const scaleFactor = 1.2;
        const delta = event.deltaY || event.detail || event.wheelDelta;
        const scaleChange = delta > 0 ? scaleFactor : 1 / scaleFactor;
        this.zoomLevel *= scaleChange;
        this.zoomLevel = Math.min(Math.max(this.minZoomLevel, this.zoomLevel), this.maxZoomLevel);
         this.scale = this.zoomLevel;
        this.updateImageTransform();
    }


    zoomin = false;
    

    slides = [];
    slideIndex = 1;
    timer;

    get maxWidth() {
        return `width: ${this.customWidth}`;
    }

    get maxHeight() {
        return `height: ${this.customHeight}; width:100%`;
    }

    @api
    get slidesData() {
        return this.slides;
    }

    set slidesData(data) {
        this.slides = data.map((slide, i) => {
            if (i === 0) {
                return {
                    ...slide,
                    index: i + 1,
                    slideClass: 'fade slds-show',
                    dotClass: 'dot active'
                };
            }
            return {
                ...slide,
                index: i + 1,
                slideClass: 'fade slds-hide',
                dotClass: 'dot'
            };
        });
    }

    connectedCallback() {
        // if (this.autoScroll) {
        //     this.timer = window.setInterval(() => {
        //         this.handleSlideSelection(this.slideIndex + 1);
        //     }, Number(this.scrollDuration));
        // }
    }


        scale = 1;
        panning = false;
        pointX = 0;
        pointY = 0;
        start = { x: 0, y: 0 };
        zoom = this.template.querySelector(".slideContainer");

    //    setTransform() {
    //     zoom.style.transform = "translate(" + pointX + "px, " + pointY + "px) scale(" + scale + ")";
    //   }

    //   onmousedown (e) {
    //     e.preventDefault();
    //     start = { x: e.clientX - pointX, y: e.clientY - pointY }; 
    //     panning = true;
    //   }

    //   onmouseup  (e) {
    //     panning = false;
    //   }

    //   onmousemove (e) {
    //     e.preventDefault();
    //     if (!panning) {
    //       return;
    //     }
    //     pointX = (e.clientX - start.x);
    //     pointY = (e.clientY - start.y);
    //      zoom = this.template.querySelector(".slideContainer");
    //     setTransform();
    //   }

    handleMouseOver(e) {
        console.log("mouseover attched");
        var img = this.template.querySelectorAll(".img");
        // const x = e.clientX - e.target.offsetLeft;
        // const y = e.clientY - e.target.offsetTop;

        //  const xa = x - 320;

         var magniArea = this.template.querySelector(".slideContainer");

        const x = (e.offsetX / magniArea.offsetWidth) * 100;
        const y = (e.offsetY / magniArea.offsetHeight) * 100;
        // console.log(x, y)

        for (let i = 0; i < img.length; i++) {
              img[i].style.transformOrigin = `${x}% ${y}%`;
               if (this.zoomin === true) {
               img[i].style.cursor = "zoom-out";
               }
               else {
                       img[i].style.cursor = "zoom-in";
               }
           img[i].style.transform = "scale(2.0)";
        }
    }
    // domelem;
    // renderedCallback(){
    //         this.domelem = this.template.querySelector('.img');
    //         this.domelem.addEventListener('mousemove', this.handleMouseOver);
    // }

    getPosition(e) {
        
         var magniArea = this.template.querySelector(".slideContainer");
        const x = (e.offsetX / magniArea.offsetWidth) * 100;
        const y = (e.offsetY / magniArea.offsetHeight) * 100;
         console.log(x + "" +  y)
    }
    
    handleMouseOut(e) {
        console.log("first click");
       
        if (this.zoomin === true) {
          
            var img = this.template.querySelectorAll(".img");

            for (let i = 0; i < img.length; i++) {
                 img[i].style.transformOrigin = `center center`;
                 img[i].style.transform = "scale(1.0)";
                 img[i].style.cursor = "zoom-in";
            }
              this.zoomin = false;
             
        }
        else if (this.zoomin === false) {
                this.zoomin = true;
                 var img = this.template.querySelectorAll(".img");
           //     const x = e.clientX - e.target.offsetLeft;
       //         const y = e.clientY - e.target.offsetTop;
          //      const xa = x - 320;
        // console.log(x, y)
           var magniArea = this.template.querySelector(".slideContainer");
       
            // let rect = e.target.getBoundingClientRect();
      //  const x = -(e.offsetX ) * 2 + "px";
      //  const y = -(e.offsetY) * 2  + "px";
        //  debugger;
          let x =  magniArea.offsetWidth/2 - e.offsetX ;
          let y = magniArea.offsetHeight/2 - e.offsetY;
       //  const x = x * 2;
           console.log(magniArea.offsetWidth - e.offsetX);
           console.log("client x position" + e.offsetX);
         console.log(x + "---------" +  y)

        for (let i = 0; i < img.length; i++) {
    
              img[i].style.transform = "scale(3.0)";
              img[i].style.transform += "translate("+ x  +"px,"+ y +"px)";
          //   img[i].style.top = y;
           //  img[i].style.left = x;

               img[i].style.cursor = "zoom-out";
        }
        }
          
         
          //  else { window.addEventListener('mousemove', this.handleMouseOver);  console.log("second click");}
          //  this.firstClick = !this.firstClick;

    }

    attachEvent(e) {
         this.handleMouseOut();
    }

   

    disconnectedCallback() {
        if (this.autoScroll) {
            window.clearInterval(this.timer);
        }
    }

    showSlide(event) {
       // debugger;
              
        const slideIndex = Number(event.target.dataset.id);
        this.handleSlideSelection(slideIndex);
          // this.handleMouseOut(event);
           
    }

    slideBackward() {
        const slideIndex = this.slideIndex - 1;
        this.handleSlideSelection(slideIndex);
    }

    slideForward() {
        const slideIndex = this.slideIndex + 1;
        this.handleSlideSelection(slideIndex);
    }


         handleDragStart(event) {
        // Set the drag data
        event.dataTransfer.setData('text/plain', 'dragging');
        this.isDragging = true;
    }

    handleDrag(event) {
        // Handle dragging event
        // You can implement custom behavior if needed
    }

    handleDragEnd(event) {
        // Reset dragging state
        this.isDragging = false;
    }
    handleSlideSelection(index) {
        
        if (index > this.slides.length) {
            this.slideIndex = 1;
        } else if (index < 1) {
            this.slideIndex = this.slides.length;
        } else {
            this.slideIndex = index;
        }

        this.slides = this.slides.map((slide) => {
           // debugger;
            
              let img = this.template.querySelectorAll(".img");
                     for (let i = 0; i < img.length; i++) {

                  img[i].style.transform = "scale(1) translate(0px, 0px)";  
                     }
              
            if (this.slideIndex === slide.index) {
                 return {    
                    ...slide,
                    slideClass: 'fade slds-show ',
                    dotClass: 'dot active'
                };
            }
            return {
                ...slide,
                slideClass: 'fade slds-hide ',
                dotClass: 'dot'
            };
        });
    }
}