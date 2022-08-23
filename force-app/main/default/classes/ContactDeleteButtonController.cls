public with sharing class ContactDeleteButtonController {

  
    @AuraEnabled(cacheable=true)
    public static List<Contact> fetchcontact(String acc){
        return [select id, FirstName,lastName from Contact where AccountId=:acc];

    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> delContact(List<string> conList){
     
    }


}
