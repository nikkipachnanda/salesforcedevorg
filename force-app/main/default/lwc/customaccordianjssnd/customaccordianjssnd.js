import { LightningElement, api } from 'lwc';
export default class Customaccordianjssnd extends LightningElement {

  // Toggle one accordion independently
  toggle(event) {
    const head = event.currentTarget;
    const acc = head.closest('.blueAccordion');
    const panel = acc.querySelector('.expandedSec');
    const icon  = acc.querySelector('.accArrow');

    const willOpen = panel?.hidden ?? true;

    // Open/close just this one
    this.setOpen(acc, willOpen);
  }

  // Expand / Collapse all
  toggleAll() {
    const accs = [...this.template.querySelectorAll('.blueAccordion')];
    const anyClosed = accs.some(a => {
      const p = a.querySelector('.expandedSec');
      return p && p.hidden;
    });

    accs.forEach(a => this.setOpen(a, anyClosed));
  }

  renderedCallback() {
    // Force first accordion open once
    const first = this.template.querySelector('.blueAccordion[data-id="a1"]');
    if (first) this.setOpen(first, true);
  }

  // --- helper for opening/closing one accordion ---
  setOpen(acc, open) {
    const head  = acc.querySelector('.accordHead');
    const panel = acc.querySelector('.expandedSec');
    const icon  = acc.querySelector('.accArrow');

    if (panel) panel.hidden = !open;
    if (head) head.setAttribute('aria-expanded', open ? 'true' : 'false');

    if (icon) {
      icon.iconName = open ? 'utility:chevrondown' : 'utility:chevronright';
      icon.style.transition = 'transform .15s ease';
    }
  }

}