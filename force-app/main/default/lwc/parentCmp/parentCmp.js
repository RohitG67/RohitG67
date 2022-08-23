import { LightningElement } from 'lwc';

export default class ParentCmp extends LightningElement {
    changeEvent(event) {
        this.template.querySelector('c-child-cmp').changeMessage(event.target.value);


    }
}