import { LightningElement } from 'lwc';
import insertAcc from '@salesforce/apex/wireCreateAccountController.insertAcc';

export default class WireCreateAcc extends LightningElement {
    contacts;
    error;
    abc = false;

    handleLoad() {
        insertAcc()
            .then(result => {
                this.contacts = result;
                this.abc = true;
            })
            .catch(error => {
                this.error = error;
            });

    }

}