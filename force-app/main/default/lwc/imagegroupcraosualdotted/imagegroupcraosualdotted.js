import { LightningElement, api, track } from 'lwc';
export default class Imagegroupcraosualdotted extends LightningElement {

      @track images = [
        { id: 1, url: '',  alt: 'Image1' },
        { id: 2, url: '',  alt: 'Image2' },
        { id: 3, url: '',  alt: 'Image3' },
        { id: 4, url: '',  alt: 'Image4' },
        { id: 5, url: '',  alt: 'Image5' },
        { id: 6, url: '',  alt: 'Image6' },
        { id: 7, url: '',  alt: 'Image7' },
        { id: 8, url: '',  alt: 'Image8' },
        { id: 9, url: '',  alt: 'Image9' }
    ];
    @track currentIndex = 0;
    @track transformValue = '0px';

    get visibleImages() {
        return this.images.slice(this.currentIndex, this.currentIndex + 3);
    }

    get visibleDots() {
        return Array(Math.ceil(this.images.length / 3)).fill().map((_, index) => ({ id: index, index }));
    }

    get transformStyle() {
        return `transform: translateX(${this.transformValue})`;
    }

    dotClass(dot) {
        return dot.index === Math.floor(this.currentIndex / 3) ? 'active' : '';
    }

    selectDot(event) {
        const dotIndex = parseInt(event.currentTarget.dataset.index, 10);
        this.currentIndex = dotIndex * 3;
        this.transformValue = `-${this.currentIndex * 100 / 3}%`;
    }
}