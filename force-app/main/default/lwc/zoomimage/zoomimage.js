import { LightningElement, track } from 'lwc';

export default class Zoomimage extends LightningElement {
    // handleButtonClick(event) {
    //     // Accessing the target element that triggered the event
    //     const targetButton = event.target;
        
    //     // Do something with the target element, for example, log its text content
    //     console.log('Button Text:', targetButton.textContent);
    // }

     
        zoom(e){
        var  offsetX;
        var  offsetY;
        var x;
        var y;
        var zoomer = e.currentTarget;

        if (e.touches && e.touches.length > 0) {
                var firstTouch = e.touches[0];
             } else {
                console.log("No touch points or event is undefined.");
        }
        e?.offsetX ? offsetX = e?.offsetX : offsetX = firstTouch?.pageX;
        e?.offsetY ? offsetY = e?.offsetY : offsetX = firstTouch?.pageX;
        x = offsetX/zoomer.offsetWidth*100
        y = offsetY/zoomer.offsetHeight*100
        zoomer.style.backgroundPosition = x + '% ' + y + '%';
        }
}