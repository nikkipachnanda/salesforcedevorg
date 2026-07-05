import { LightningElement, wire } from 'lwc';
import getFooterColumns from '@salesforce/apex/FooterColumnService.getFooterColumns';

export default class Dynamicfootercmp extends LightningElement {
 /*  columns = [
    { id: 1, heading: 'About Us', subtext: 'Learn more about our company' },
    { id: 2, heading: 'Services', subtext: 'What we offer' },
    { id: 3, heading: 'Contact', subtext: 'Get in touch with us' },
    { id: 4, heading: 'Blog', subtext: 'Read our latest articles' },
    { id: 5, heading: 'Careers', subtext: 'Explore job opportunities' },
    { id: 6, heading: 'Help Center', subtext: 'FAQs and documentation' },
    { id: 7, heading: 'Terms', subtext: 'Terms and conditions' },
    { id: 8, heading: 'Privacy Policy', subtext: 'How we handle data' },
    { id: 9, heading: 'Community', subtext: 'Join the conversation' },
    { id: 10, heading: 'Events', subtext: 'Upcoming events and webinars' },
    { id: 11, heading: 'Press', subtext: 'Media and news resources' }
  ];*/

    footerData = [];
    error;

    @wire(getFooterColumns)
    wiredFooterColumns({ data, error }) {
        if (data) {
            this.footerData = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.footerData = [];
        }
    }

}