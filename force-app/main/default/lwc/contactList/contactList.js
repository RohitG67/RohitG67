import { LightningElement, wire, api } from 'lwc';
import fetchContactRecords from '@salesforce/apex/ContactRecordController.fetchContactRecords';
export default class ContactList extends LightningElement {

    error = '';
    ContactsList = [];
    @api recordId = '';

    // wire method using function 

    @wire(fetchContactRecords)
    wiredcontacts({ error, data }) {
            if (data) {
                this.ContactsList = data;
                console.log(JSON.stringify(data));
            } else if (error) {
                this.error = error;

            }
            // console.log('data=' + this.ContactsList);
        }
        // Load_Contact() {
        //putted hard code values for learning only this is not best practice 
        //this.recordId = '0015g00000MuZo1AAF';
        //  }

}