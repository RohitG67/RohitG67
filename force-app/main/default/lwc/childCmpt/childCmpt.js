import { LightningElement, api, track } from 'lwc';

export default class ChildCmpt extends LightningElement {
    @track Message;

    @api
    changeMessage(strString) {
        console.log('Child Component');
        this.Message = strString.toUpperCase();
    }

}