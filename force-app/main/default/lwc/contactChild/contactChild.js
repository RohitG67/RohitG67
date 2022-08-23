import { LightningElement, api, wire } from 'lwc';
import findContactByAccId from '@salesforce/apex/contactChildController.findContactByAccId'
export default class ContactChild extends LightningElement {
    @api accountId;
    @wire(findContactByAccId, { accountId: '$accountId' }) contacts;

    columns = [
        { label: 'First Name', fieldName: 'FirstName' },
        { label: 'Last Name', fieldName: 'LastName' },
        { label: 'Email', fieldName: 'Email', type: 'email' }
    ];


}