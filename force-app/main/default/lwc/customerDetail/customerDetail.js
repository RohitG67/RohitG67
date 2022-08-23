import { api, LightningElement } from 'lwc';

export default class CustomerDetail extends LightningElement {
    @api cmpDetail = { cmpName: 'sheron', cmpAddress: 'Canada' }
}