import { LightningElement, api } from 'lwc';
export default class Imagecraosualdotted extends LightningElement {
   @api images = [
        { id: 1, url: 'https://example.com/image1.jpg', alt: 'Image 1' },
        { id: 2, url: 'https://example.com/image2.jpg', alt: 'Image 2' },
        { id: 3, url: 'https://example.com/image3.jpg', alt: 'Image 3' }, 
          { id: 4, url: 'https://example.com/image1.jpg', alt: 'Image 4' },
        { id: 5, url: 'https://example.com/image2.jpg', alt: 'Image 5' },
        { id: 6, url: 'https://example.com/image3.jpg', alt: 'Image 6' },
        // Add more image objects with online image URLs as needed
    ];
    currentIndex = 0;

    get transformStyle() {
        return `transform: translateX(-${this.currentIndex * 360 }px)`;
    }

  

    handleDotClick(event) {
           this.currentIndex = parseInt(event.target.dataset.index, 10);
        //  this.currentIndex = parseInt(event.target.dataset.index, 10);
    }

    previousSlide() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
        }
    }

    nextSlide() {
        if (this.currentIndex < this.images.length - 1) {
            this.currentIndex++;
        }
    }
    

}