public with sharing class findContactController {
@AuraEnabled(cacheable=true)
   public static list<contact> findCon(string searchKey){
        String key = '%' + searchKey + '%';
        return [
            SELECT Id, LastName, Title, Phone, Email
            FROM Contact
            WHERE LastName LIKE :key 
            LIMIT 10
        ];
    }
   }

