import { LightningElement } from 'lwc';

import findCon from '@salesforce/apex/findContactController.findCon';

export default class FindContacts extends LightningElement {

    searchKey = '';
    contacts = [];
    error;

    handleKeyChange(event) {
        this.searchKey = event.target.value;
        console.log(this.searchKey);
    }

    handleSearch() {
        findCon({ searchKey: this.searchKey })
            .then((result) => {
                this.contacts = result;
                console.log(this.contacts);
                this.error = undefined;
            })
            .catch((error) => {
                this.error = error;
                this.contacts = undefined;
            });
    }
}