import { LightningElement } from 'lwc';
export default class Zoominouticon extends LightningElement {

  scale = 1;
  posX = 0;
  posY = 0;
  isDragging = false;
  startX = 0;
  startY = 0;
  minScale = 1;

  get imageStyle() {
    return `transform: translate(${this.posX}px, ${this.posY}px) scale(${this.scale}); transition: transform 0.1s linear; cursor: ${this.isDragging ? 'grabbing' : 'grab'};`;
  }

  handleZoomIn() {
    if (this.scale < 4) this.scale += 0.2;
  }

  handleZoomOut() {
    if (this.scale > this.minScale) {
      this.scale -= 0.2;
    } else {
      // Reset to default position when zoom reaches the minimum level
      this.scale = this.minScale;
      this.posX = 0;
      this.posY = 0;
    }
  }

  handleMouseDown(event) {
    this.isDragging = true;
    this.startX = event.clientX - this.posX;
    this.startY = event.clientY - this.posY;
  }

  handleMouseMove(event) {
    if (this.isDragging) {
      this.posX = event.clientX - this.startX;
      this.posY = event.clientY - this.startY;
    }
  }

  handleMouseUp() {
    this.isDragging = false;
  }

}