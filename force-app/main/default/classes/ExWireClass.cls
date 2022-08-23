public with sharing class ExWireClass {
    @AuraEnabled(cacheable=true)
    public static list<contact> pr1Wire(){
        try {
            return [select name,id from contact];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
   
