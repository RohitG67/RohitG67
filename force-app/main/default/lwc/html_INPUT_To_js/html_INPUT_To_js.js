import { LightningElement } from 'lwc';

export default class Html_INPUT_To_js extends LightningElement {
    fName;
    lName;
    phone;
    email;

    handleChange(event) {

        let f = this.template.querySelectorAll("lightning-input");
        f.forEach(function(element) {
            if (element.name == "FirstName") {
                this.fName = element.value;

            } else if (element.name == "LastName") {
                this.lName = element.value;
            } else if (element.name == "Phone") {
                this.phone = element.value;
            } else if (element.name == "Email") {
                this.email = element.value;
            }
        }, this);

        console.log('First Name: ' + this.fName);
        console.log('Last Name: ' + this.lName);
        console.log('Phone: ' + this.phone);
        console.log('Email : ' + this.email);

    }
}