import { LightningElement, wire } from 'lwc';
import accParent from '@salesforce/apex/accountParentController.getAcc'
export default class AccountParent extends LightningElement {

    accountidfromparent;
    @wire(accParent) accounts;

    handleClick(event) {
        event.preventDefault();
        this.accountidfromparent = event.target.dataset.accountid;
    }

}