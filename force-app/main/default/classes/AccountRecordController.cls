public with sharing class AccountRecordController {

  @AuraEnabled(cacheable=true)
  public static List<Account> FetchAccount(){
return [SELECT Name,id,Website FROM Account];
  }
}
