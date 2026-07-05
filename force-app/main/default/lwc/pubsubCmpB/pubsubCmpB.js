import { LightningElement, track } from 'lwc';
import pubsub from 'c/pubsubCmp';

export default class PubsubCmpB extends LightningElement {
    message;
    @track recobject;


     connectedCallback(){
        this.callSubscriber()
    }
    // callSubscriber(){
    //     pubsub.subscribe('componentA', (message)=>{
    //         this.message = message
    //     })
    // }

      callSubscriber(){
        pubsub.subscribe('componentA', (object)=>{
            debugger;
            this.recobject = object;
        })
    }


    // connectedCallback(){
    //     this.callSubscriber()
    // }
    // // callSubscriber(){
    // //     pubsub.subscribe('componentA', (message)=>{
    // //         this.message = message
    // //     })
    // // }

    //   callSubscriber(){
    //     pubsub.subscribe('componentA', (object)=>{
    //         this.recobject = object;
    //     })
    // }
}