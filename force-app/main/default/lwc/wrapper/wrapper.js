import { LightningElement, track } from 'lwc';
import GLOBAL_STYLE from '@salesforce/resourceUrl/Score';
import Score_Images from '@salesforce/resourceUrl/slideimages';

export default class Wrapper extends LightningElement {

    report = Score_Images + '/scoreimages/report.svg';
    dashboard = Score_Images + '/scoreimages/dashboard.svg';
    supplier = Score_Images + '/scoreimages/supplier.svg';
    speaker = Score_Images + '/scoreimages/speaker.svg';
    arrwdown = Score_Images + '/scoreimages/arrowdown.png';
    arrowright = Score_Images + '/scoreimages/arrowright.png';
    smiley = Score_Images + '/scoreimages/smiley.png';
    warning = Score_Images + '/scoreimages/warning.svg';
    expl = Score_Images + '/scoreimages/expl.svg';
    tick = Score_Images + '/scoreimages/success.svg';
    close = Score_Images + '/scoreimages/close.svg';
    
    constructor() {
        super();     
        let link = document.createElement("LINK");
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("type", "text/css");
        link.setAttribute("href", GLOBAL_STYLE);
        document.head.appendChild(link);
    }


    @track value = '';

    get options() {
        return [
            { label: 'Submit Resolution', value: 'option1' },
            { label: 'Submit Support Request', value: 'option2' },
        ];
    }

}