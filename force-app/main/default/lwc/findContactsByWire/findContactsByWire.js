import { LightningElement, wire } from 'lwc';
import findCon from '@salesforce/apex/findContactController.findCon';

export default class FindContactsByWire extends LightningElement {
    searchKey = '';
    contacts = [];
    error;

    handleKeyChange(event) {
        this.searchKey = event.target.value;
        console.log(this.searchKey);
    }
    @wire(findCon, { searchKey: '$searchKey' })

    wirecontact({ error, data }) {
            if (data) {
                this.contacts = data;
                this.error = undefined;

            } else if (error) {
                this.error = error;
                this.contacts = undefined;
            }
        }
        /* onclickHandle() {
             alert(click);
             this.searchKey = '';
         }*/ //no button click worked, because wire is reactive 
}