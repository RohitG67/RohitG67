import { LightningElement, api } from 'lwc';

import Location_Field from '@salesforce/schema/Service__c.Location__c';


export default class ChildCreateService extends LightningElement {

    fields = [Location_Field];

    // Flexipage provides recordId and objectApiName
    @api recordId;
    @api objectApiName;

}