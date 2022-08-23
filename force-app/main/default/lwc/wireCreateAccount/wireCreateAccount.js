import { api, LightningElement, wire } from 'lwc';
import insertAcc from '@salesforce/apex/wireCreateAccountController.insertAcc';

export default class WireCreateAccount extends LightningElement {





    @wire(insertAcc, { names: '$name', phones: '$phone' }) records;

    onclickHndle() {
        let v = this.template.querySelectorAll("lightning-input");

        v.forEach(function(element) {
            if (element.name == "Name") {
                this.name = element.value;
            } else if (element.name == "Phone") {
                this.phone = element.value;
            }
        }, this);
        console.log(this.name);
        console.log(this.phone);


    }




}