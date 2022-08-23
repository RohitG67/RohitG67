import { LightningElement, wire, api } from 'lwc';
import AccGet from '@salesforce/apex/acoountFetchController.AccGet';

export default class AccountFetchAssignment extends LightningElement {
    AccList = [];
    @api recordId;
    @wire(AccGet, { accid: '$recordId' })
    wireAcc({ error, data }) {
        if (data) {
            this.AccList = data;
        }
    }

    onclickHandle() {

        this.recordId = '';
    }
}