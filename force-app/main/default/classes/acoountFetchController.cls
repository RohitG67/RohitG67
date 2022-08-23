public with sharing class acoountFetchController {
    @AuraEnabled(cacheable=true)
    public static List<Account> AccGet(){
     return [SELECT Name,Id,Phone,Industry,NumberOfEmployees from Account Limit 10];

    }
}
