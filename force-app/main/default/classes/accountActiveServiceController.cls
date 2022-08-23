public with sharing class accountActiveServiceController {
    @AuraEnabled(cacheable=true)
    public static list<Account> fetchAccount(string AccId){
        return [SELECT Id,Total_Locations__c,Total_Active_Services__c,Total_Cost_Of_Services__c,Name
                FROM Account WHERE Id=:AccId ];

    }
}
