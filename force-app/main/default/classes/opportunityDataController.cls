public with sharing class opportunityDataController {
        @AuraEnabled(cacheable=true)
        public static List<Opportunity> getOpportunities(){
            return [SELECT Amount,Name,StageName FROM Opportunity WHERE StageName = 'Closed Won'];
        }
    }
