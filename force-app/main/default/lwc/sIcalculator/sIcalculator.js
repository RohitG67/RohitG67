import { LightningElement } from 'lwc';

export default class SIcalculator extends LightningElement {
    principle;
    rate;
    tennure;
    output;

    principleHandler(event){
        this.principle=parseInt(event.target.value);
    }
    rateHandler(event){
        this.rate=parseInt(event.target.value)
    }
    tennureHandler(event){
        this.tennure=parseInt(event.target.value)
    }
    butoonHandler(){
        this.output='SI is=====  ' +(this.principle*this.rate*this.tennure)/100;

    }
}