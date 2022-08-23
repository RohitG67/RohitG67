import { LightningElement,track} from 'lwc';

export default class LwcP1 extends LightningElement {
 greeting ='Folks';
    changeHandler(event){
        this.greeting=event.target.value;

    }
}