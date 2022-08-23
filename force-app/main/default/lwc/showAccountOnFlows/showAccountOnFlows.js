import { LightningElement, api } from 'lwc';

export default class ShowAccountOnFlows extends LightningElement {
    @api strRecordId;
    arrayFields = ['Name', 'AccountNumber', 'Phone', 'Type', 'Website'];
}