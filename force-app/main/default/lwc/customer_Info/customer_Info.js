import { LightningElement } from 'lwc';

export default class Customer_Info extends LightningElement {
    show=true;
    name;
    age;
    address;
    nameHandler(event){
        this.name=event.target.value
    }
    ageHandler(event){
        this.age=event.target.value
    }
    addHandler(event){
        this.address=event.target.value
    }
    saveButtonHandler(){
        this.show=false

    }
}