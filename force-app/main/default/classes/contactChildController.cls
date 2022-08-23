public with sharing class contactChildController {
    @AuraEnabled(cacheable=true)
    public static list<contact> findContactByAccId(string accountId){
        return [select Id, FirstName, LastName,Email 
        FROM Contact 
        WHERE AccountId =:accountId];

    }
    @AuraEnabled
    public static string contactCreate(string accId,string firstname,string lastname,string email,string title){
        contact c=new contact();
        c.FirstName=firstname;
        c.LastName=lastname;
        c.Email=email;
        c.Title=title;
        c.AccountId=accId;
        insert c;
     String urlRecord = URL.getSalesforceBaseUrl().toExternalForm() +'/' + c.id;
     return  urlRecord;

    }
}
