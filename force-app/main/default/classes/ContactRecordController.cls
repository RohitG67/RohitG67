public with sharing class ContactRecordController {

    @AuraEnabled(cacheable=true)
    public static List<Contact> fetchContactRecords(){
        return [SELECT id,firstName,LastName,Email,Phone,Account.Name FROM Contact];
    }
}
