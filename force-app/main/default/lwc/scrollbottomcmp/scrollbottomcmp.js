import { LightningElement } from 'lwc';
export default class Scrollbottomcmp extends LightningElement {
    connectedCallback() {
       window.addEventListener('scroll', this.handleScroll);
     
   }
   disconnectedCallback() {
       window.removeEventListener('scroll', this.handleScroll);
   }
   handleScroll = () => {
       // Get the scroll position
         console.log("test scroll");
       const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
          console.log("innner height" + scrolledToBottom);
       if (scrolledToBottom) {
           this.loadMoreData();
          
       }
   };
   loadMoreData() {
       console.log('User reached the bottom of the page');
       // Call your method here (e.g., fetch more records)
   }
}