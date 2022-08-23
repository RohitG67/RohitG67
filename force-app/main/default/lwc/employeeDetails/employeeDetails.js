import { LightningElement } from 'lwc';

export default class EmployeeDetails extends LightningElement {
    empDetails = [{
            empName: 'Roger',
            empAddress: 'CA'
        }, { empName: 'zindal', empAddress: 'LA' },
        {
            empName: 'Sindo',
            empAddress: 'GA'
        }, { empName: 'shero', empAddress: 'LA' }
    ]
}