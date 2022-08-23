import { LightningElement, wire } from 'lwc';
import accFetch from '@salesforce/apex/Accountextract.accFetch'

export default class WireFunctionCall extends LightningElement {
    @wire
    account
}