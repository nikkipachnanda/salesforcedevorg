import { LightningElement, track } from 'lwc';
import imgslider from '@salesforce/resourceUrl/imgslider';

export default class DraggableThumbnail extends LightningElement {

 isPanning = false;
  
 imageUrl =  imgslider + '/1.jpg';
    imageStyle = '';
    startX;
    startY;
    offsetX = 0;
    offsetY = 0;
    isDragging = false;

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

    handleMouseMove(event) {
        // Prevent handling mousemove event if dragging
        if (this.isDragging) {
            return;
        }

       // event.preventDefault(); // Prevent default behavior

        // Get mouse coordinates
        
         
      
        if (this.isPanning) {
              console.log("mouse move");
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


      imageStyle = '';
       isDraggable = true;
    mouseMoveTimer;

    handleMouseMove() {
        // Disable draggable attribute
        this.isDraggable = false;

        // If there is a mouse move timer, clear it
        if (this.mouseMoveTimer) {
            clearTimeout(this.mouseMoveTimer);
        }

        // Set a timeout to revert the draggable attribute to true after a delay
        this.mouseMoveTimer = setTimeout(() => {
            this.isDraggable = true;
        }, 1000); // Adjust the delay as needed
    }
        


}