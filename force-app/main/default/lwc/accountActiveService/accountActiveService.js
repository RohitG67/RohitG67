import { LightningElement, api, wire } from 'lwc';
import fetchAccount from '@salesforce/apex/accountActiveServiceController.fetchAccount';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';
//import objectName from '@salesforce/schema/objectApiName';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import TOTAL_LOCATION_FIELD from '@salesforce/schema/Account.Total_Locations__c';
import TOTAL_ACTIVE_SERVICE_FIELD from '@salesforce/schema/Account.Total_Active_Services__c';
import TOTAL_COST_OF_SERVICE_FIELD from '@salesforce/schema/Account.Total_Cost_Of_Services__c';
export default class AccountActiveService extends LightningElement {
    Name = NAME_FIELD;
    Total_Locations__c = TOTAL_LOCATION_FIELD;
    Total_Active_Services__c = TOTAL_ACTIVE_SERVICE_FIELD;
    Total_Cost_Of_Services__c = TOTAL_COST_OF_SERVICE_FIELD;
    @api objectApiName;
    ForCreate = false;
    AccountsList = [];
    error;
    @api recordId;
    @wire(fetchAccount, { AccId: '$recordId' })
    WireAccountFetch({ error, data }) {
        if (data) {
            this.AccountsList = data;
            console.log(this.Accounts);
        } else if (error) {
            this.error = error;
        }
    }

    handleClick() {
        this.ForCreate = true;
    }

    handleSuccess() {
        const evt = new ShowToastEvent({
            title: 'Success',
            message: 'Service Created Successfully !!',
            variant: 'success',
            mode: 'dismissible'
        });
        this.dispatchEvent(evt);
    }
}