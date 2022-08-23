import { LightningElement } from 'lwc';

export default class EmployeeDatail_Lwc extends LightningElement {
name = '';
age='';
salary='';

changeName(event){
this.name=event.target.value;
}
changeAge(event){
this.age=event.target.value;

}
changeSalary(event){
this.salary=event.target.value;
}
}