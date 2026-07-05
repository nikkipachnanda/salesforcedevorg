import { LightningElement } from 'lwc';
export default class Fixedbtnsalesforceapp extends LightningElement {
    renderedCallback() {
        if (!this.hasRendered) {
            this.hasRendered = true;

            const icon = document.createElement('div');
            icon.innerHTML = `
                <div style="
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    z-index: 10000;
                    background: #0070d2;
                    border-radius: 50%;
                    width: 50px;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                ">
                   Back Button
                </div>
            `;

            // Append directly to BODY — stays fixed even in SF1 scroll containers
            document.body.appendChild(icon);
        }
    }

}