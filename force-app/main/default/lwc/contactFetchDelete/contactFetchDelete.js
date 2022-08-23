import { LightningElement, api, wire } from 'lwc';
import fetchcontact from '@salesforce/apex/ContactDeleteButtonController.fetchcontact';

export default class ContactFetchDelete extends LightningElement {
    @api recordId;
    contactList = [];
    error;
    selectedContactList = [];

    @wire(fetchcontact, { acc: '$recordId' })
    wireContact({ error, data }) {
        if (data) {

            this.contactList = data;
            this.error = undefined;

        } else if (error) {
            this.error = error;
            this.data = undefined;
        }
    }

    handleSelectContact(event) {
        var selectedRows = event.detail.selectedRows;
        for (let i = 0; i < selectedRows.length; i++) {
            this.selectedContactList.push(selectedRows[i].Id);
            console.log('Selected Records Id : ' + JSON.stringify(this.selectedContactList));
        }
    }
}