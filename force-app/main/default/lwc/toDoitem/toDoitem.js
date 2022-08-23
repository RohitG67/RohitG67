import { LightningElement,api } from 'lwc';

export default class ToDoitem extends LightningElement {
    @api itemName='new item';
}