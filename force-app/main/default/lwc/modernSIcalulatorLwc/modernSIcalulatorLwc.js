import { LightningElement } from 'lwc';

export default class ModernSIcalulatorLwc extends LightningElement {
    p;
    r;
    t;
    o;
    pHandler(event){
        this.p=event.target.value;
    }
    rHandler(event){
        this.r=event.target.value;
    }
    tHandler(event){
        this.t=event.target.value;
    }
    bHandler(){
        this.o= 'SI is = '+(this.p* this.r * this.t)/100;
    }
}