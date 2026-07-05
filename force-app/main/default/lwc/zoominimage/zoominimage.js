import { LightningElement, api } from 'lwc';

export default class ZoomableImage extends LightningElement {
    @api imageUrl;
    @api zoomLevel = 1;
    @api minZoomLevel = 1;
    @api maxZoomLevel = 5;

    containerStyle = 'width: 500px; height: 500px; overflow: hidden; position: relative;';
    imageStyle = 'width: 100%; height: 100%; transition: transform 0.3s ease; border:1px red solid;';

    isPanning = false;
    startX = 0;
    startY = 0;
    offsetX = 0;
    offsetY = 0;

    handleMouseDown(event) {
        this.isPanning = true;
        this.startX = event.clientX;
        this.startY = event.clientY;
        this.template.querySelector('.zoomable-image').style.cursor = 'grabbing';
    }

    handleMouseUp() {
        this.isPanning = false;
        this.template.querySelector('.zoomable-image').style.cursor = 'pointer';
    }

    handleMouseMove(e) {
        console.log("test");
        if (this.isPanning) {
         //   event.preventDefault();
            // const deltaX = event.clientX - this.startX;
            // const deltaY = event.clientY - this.startY;
            // this.offsetX += deltaX;
            // this.offsetY += deltaY;
            // this.startX = event.clientX;
            // this.startY = event.clientY;


            // this.updateImageTransform();

             var img = this.template.querySelectorAll(".zoomable-image");
        // const x = e.clientX - e.target.offsetLeft;
        // const y = e.clientY - e.target.offsetTop;

        //  const xa = x - 320;

         var magniArea = this.template.querySelector(".zoomable-container");

        const x = (e.offsetX / magniArea.offsetWidth) * 100;
        const y = (e.offsetY / magniArea.offsetHeight) * 100;
        // console.log(x, y)

        for (let i = 0; i < img.length; i++) {
              img[i].style.transformOrigin = `${x}% ${y + 9}%`;
              
           
        }
        }
    }

    updateImageTransform() {
        const imageElement = this.template.querySelector('.zoomable-image');
        const transformValue = `scale(${this.zoomLevel}) translate(${this.offsetX}px, ${this.offsetY}px)`;
        imageElement.style.transform = transformValue;
    }

    handleWheel(event) {
        event.preventDefault();
        const scaleFactor = 1.2;
        const delta = event.deltaY || event.detail || event.wheelDelta;
        const scaleChange = delta > 0 ? scaleFactor : 1 / scaleFactor;
        this.zoomLevel *= scaleChange;
        this.zoomLevel = Math.min(Math.max(this.minZoomLevel, this.zoomLevel), this.maxZoomLevel);
        this.updateImageTransform();
    }
}