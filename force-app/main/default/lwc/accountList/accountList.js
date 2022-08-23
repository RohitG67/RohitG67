import { LightningElement, wire, api } from 'lwc';
import FetchAccount from '@salesforce/apex/AccountRecordController.FetchAccount'
export default class AccountList extends LightningElement {

    error = '';
    AccountList;
    @api recordId;
    /*@wire(FetchAccount)

    wireAccount({ error, data }) {
        if (data) {
            this.AccountList = data;
        } else if (error) {
            this.error = error;
        }

    }*/

    //Load by imparative method

    LoadAccount() {
        FetchAccount()
            .then(result => {
                this.AccountList = result;

            })
            .catch(error => {
                this.error = error;
            });

    }

}