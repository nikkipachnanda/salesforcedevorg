import { LightningElement } from 'lwc';
import myCommonStyles from '@salesforce/resourceUrl/globalstyle';
import { loadStyle } from 'lightning/platformResourceLoader';
export default class Textcentdynamicinput extends LightningElement {

     constructor() {
        super();
        loadStyle(this, myCommonStyles)
            .then(result => {
                // Possibly do something when load is complete.
            });
    }

    renderedCallback() {
        const lightningInput = this.template.querySelector('lightning-input');
        const symbolEl = this.template.querySelector('.currency-symbol');
        const wrapperEl = this.template.querySelector('.currency-wrapper');

        // Defer until next frame to let shadow DOM finish rendering
        requestAnimationFrame(() => {
            debugger;
            const inputEl = lightningInput?.shadowRoot?.querySelector('input');

            if (inputEl && symbolEl && !symbolEl.dataset.aligned) {
                const inputBox = inputEl.getBoundingClientRect();
                const wrapperBox = wrapperEl.getBoundingClientRect();

                // Align the span vertically with the input box
                const topRelativeToWrapper = inputBox.top - wrapperBox.top;
                const middleOfInput = topRelativeToWrapper + inputBox.height / 2;

                symbolEl.style.top = `${middleOfInput}px`;
                symbolEl.style.transform = 'translateY(-50%)';
                symbolEl.style.position = 'absolute';

                // Add left padding to input so text doesn't overlap $
                inputEl.style.paddingLeft = '1.75rem';

                // Prevent reapplying
                symbolEl.dataset.aligned = 'true';
            }
        });
    }
}