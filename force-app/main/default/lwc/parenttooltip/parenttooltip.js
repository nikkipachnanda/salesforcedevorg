import { LightningElement, track } from 'lwc';

export default class ParentTooltip extends LightningElement {
    @track links = [
        { id: '1', tooltipText: 'Tooltip for Link 1', label: "menu1", isVisible: false },
        { id: '2', tooltipText: 'Tooltip for Link 2', label: "menu2", isVisible: false },
        // Add more links as needed
    ];

    @track activeTooltipId = null; // ID of the currently active tooltip

    handleLinkClick(event) {
        event.stopPropagation(); // Prevents the click event from propagating to the document
        
        const linkId = event.detail; // Get the ID from the event detail

        // Set the active tooltip ID to the clicked link ID
        this.activeTooltipId = this.activeTooltipId === linkId ? null : linkId;

        // Update the visibility state
        this.updateTooltipVisibility();
    }

    updateTooltipVisibility() {
        this.links = this.links.map(link => ({
            ...link,
            isVisible: this.activeTooltipId === link.id
        }));
    }

    connectedCallback() {
        document.addEventListener('click', this.handleDocumentClick.bind(this));
    }

    disconnectedCallback() {
        document.removeEventListener('click', this.handleDocumentClick.bind(this));
    }

    handleDocumentClick(event) {
        // Close all tooltips if click is outside of the component
        if (!this.template.contains(event.target)) {
            this.activeTooltipId = null;
            this.updateTooltipVisibility();
        }
    }
}