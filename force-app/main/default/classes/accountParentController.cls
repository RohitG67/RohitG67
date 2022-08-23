public with sharing class accountParentController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAcc(){

        return [select Id,Name from Account LIMIT 10];

    }
}
