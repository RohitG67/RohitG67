public with sharing class Accountextract {
    @AuraEnabled(cacheable=true)
    public static string accFetch(){
        try {
            return [select Id,Name,Phone from Account limit 10 ];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
   
}
