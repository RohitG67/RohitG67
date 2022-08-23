import { LightningElement, wire, api } from 'lwc';
import fetchcontact from '@salesforce/apex/ContactDeleteButtonController.fetchcontact';

export default class ContactDeleteButton extends LightningElement {

    @api recordId;
    contactList = [];
    error;
    @wire(fetchcontact, { acc: '$recordId' })

    wirecontact({ error, data }) {
        if (data) {

            this.contactList = data;
            this.error = undefined;

        } else if (error) {
            this.error = error;
            this.data = undefined;
        }

    }

}