import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import FirstName from '@salesforce/label/c.FirstName';
import LastName from '@salesforce/label/c.LastName';
import Email from '@salesforce/label/c.Email';
import title from '@salesforce/label/c.title';
import contactCreate from '@salesforce/apex/contactChildController.contactCreate'
export default class CreateContact extends LightningElement {

    fname = FirstName;
    lname = LastName;
    E = Email;
    t = title;
    accId;
    firstname;
    lastname;
    email;
    title;

    @api recordId;


    handlechangefname(event) {
        this.firstname = event.target.value;

    }
    handlechangelname(event) {
        this.lastname = event.target.value;
    }
    handlechangeemail(event) {
        this.email = event.target.value;
    }
    handlechangetitle(event) {
        this.title = event.target.value;
    }


    createConHandle() {
            contactCreate({ accId: this.recordId, firstname: this.firstname, lastname: this.lastname, email: this.email, title: this.title })
                .then(result => {
                    console.log(result);
                    const event = new ShowToastEvent({
                        title: 'Success',
                        message: ' {0} Contact created! See it {1}!',
                        messageData: [
                            'Contact',
                            {
                                url: result,

                                label: 'here',
                            },
                        ],
                        variant: 'success'
                    });
                    this.dispatchEvent(event);
                })

            .catch(error => { console.log(error.message) });


            // this.showTosat('Success', 'Succesfully Contact is Created', 'success');
        }
        //  showTosat(title, message, variant) {
        //       this.dispatchEvent(new this.ShowToastEvent({ title: title, message: message, variant: variant }));
        //   }
}