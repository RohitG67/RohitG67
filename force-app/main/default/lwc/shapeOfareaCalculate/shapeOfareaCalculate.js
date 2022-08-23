import { LightningElement, track } from 'lwc';

export default class ShapeOfareaCalculate extends LightningElement {
    side;
    l;
    b;
    d1;
    d2;
    @track output;

    leHandler(event){
        this.l=event.target.value;
        
    }
    wiHandler(event){
        this.b=event.target.value;
    }
    sqHandler(event){
        this.side=event.target.value;
    }
    d1Handler(event){
        this.d1=event.target.value;
    }
    d2Handler(event){
        this.d2=event.target.value;
    }

    sqareaHandler(){
        var s=parseInt(this.side)
        this.output= s*s
    }
    reareaHandler(){
        var L=parseInt(this.l)
        var B=parseInt(this.b)
        this.output=L*B
    }
    rhareaHandler(){
        var D1=parseInt(this.d1)
        var D2=parseInt(this.d2)
        this.output=(D1*D2)/2
    }
}