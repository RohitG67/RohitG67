import { LightningElement, api } from 'lwc';
import createAcc from '@salesforce/apex/createAccAndConController.createAcc';
export default class CreateAccAndCon extends LightningElement {

    @api contacts;
    @api error;
    @api name;
    @api phone;
    fname;
    lname;
    email;


    handleChange(event) {

        let v = this.template.querySelectorAll("lightning-input");

        v.forEach(function(element) {
            if (element.name == "Name") {
                this.name = element.value;
            } else if (element.name == "First Name") {
                this.fname = element.value;
            } else if (element.name == "Last Name") {
                this.lname = element.value;
            } else if (element.name == "Email") {
                this.email = element.value;
            } else if (element.name == "Phone") {
                this.phone = element.value;
            }
        }, this);
        console.log(this.name);
        console.log(this.phone);
        console.log(this.fname);
        console.log(this.lname);
        console.log(this.email);

    }

    handleClick() {
        createAcc({ name: this.name, phone: this.phone, lname: this.lname, fname: this.fname, email: this.email })
            .then((result) => {
                this.contacts = result;
                this.error = undefined;
            })
            .catch((error) => {
                this.error = error;
                this.contacts = undefined;
            });
    }

}