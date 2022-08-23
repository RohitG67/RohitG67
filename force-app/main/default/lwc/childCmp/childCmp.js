import { LightningElement, api } from 'lwc';

export default class ChildCmp extends LightningElement {
    message;

    @api
    changeMessage(Inpstring) {
        this.message = Inpstring.toUpperCase();
    }


}