import { LightningElement, track } from 'lwc';

export default class ScrollIntoViewFuncCmp extends LightningElement {
  @track isUploadScreenVisible = false;

  inputFields = [];
  lastFocusedFieldId;
  savedScrollPosition = 0;

  connectedCallback() {
    this.inputFields = Array.from({ length: 20 }, (_, i) => ({
      id: `field${i + 1}`,
      label: `Input Field ${i + 1}`
    }));
  }

  handleFocus(event) {
    this.lastFocusedFieldId = event.target.dataset.id;
  }

  handleUploadClick(event) {
    // Store scroll and focused field info
    this.savedScrollPosition = window.scrollY;
    this.lastFocusedFieldId = event.currentTarget.dataset.id;
    this.isUploadScreenVisible = true;
  }

  handleFileAdd() {
    this.isUploadScreenVisible = false;

    // Scroll/focus back after a slight delay
    setTimeout(() => {
      const lastInput = this.template.querySelector(`[data-id="${this.lastFocusedFieldId}"]`);

      if (lastInput) {
        lastInput.scrollIntoView({ behavior: 'smooth', block: 'center' });

        setTimeout(() => {
          lastInput.focus();
        }, 300);
      } else {
        window.scrollTo({ top: this.savedScrollPosition, behavior: 'smooth' });
      }
    }, 300);
  }
}