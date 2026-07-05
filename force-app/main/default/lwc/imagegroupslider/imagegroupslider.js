import { LightningElement, track } from 'lwc';
export default class Imagegroupslider extends LightningElement {
    @track items = [
        { id: 1, label: 'a' },
        { id: 2, label: 'b' },
        { id: 3, label: 'c' },
        { id: 4, label: 'd' },
        { id: 5, label: 'e' },
        { id: 6, label: 'f' },
        { id: 7, label: 'g' },
        { id: 8, label: 'h' },
        { id: 9, label: 'i' },
        { id: 10, label: 'j' },
        { id: 11, label: 'k' }
    ];
    @track currentSlide = 0;
    slidesToShow = 3;

    get displayedItems() {
        const startIndex = this.currentSlide * this.slidesToShow;
        const endIndex = startIndex + this.slidesToShow;
        return this.items.slice(startIndex, endIndex);
    }

    get slideStyle() {

        if (this.items.length === 0) {
            return ''; // No images, return empty string to avoid NaN
        }
        const slideWidth = 100 / Math.ceil(this.items.length / this.slidesToShow);
        const translation = -(this.currentSlide * slideWidth);
        const roundedTranslation = Math.round(translation * 100) / 100; // Round to two decimal places
        return `translateX(${roundedTranslation}%)`;
    }

    get dots() {
        return Array.from({ length: Math.ceil(this.items.length / this.slidesToShow) }, (_, i) => ({ id: i }));
    }

    handleDotClick(event) {
         const dotIndex = parseInt(event.target.dataset.index, 10);
        if (dotIndex >= 0 && dotIndex < this.dots.length) {
            this.currentSlide = dotIndex;
        }
    }

    dotClass(index) {
        return index === this.currentSlide ? 'active' : '';
    }
}