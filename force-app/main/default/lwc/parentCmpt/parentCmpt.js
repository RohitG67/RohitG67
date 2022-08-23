import { api, LightningElement } from 'lwc';

export default class ParentCmpt extends LightningElement {
    @api
    handleChangeEvent(event) {
        this.template.querySelector('c-child-cmpt').changeMessage(event.target.value);

    }
}