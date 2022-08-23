public with sharing class wireCreateAccountController {
    @AuraEnabled
    public static account insertAcc(string names,string phones ) {
        /*System.debug('name'+names);
        account ac=new account();
        ac.Name=names;
        ac.Phone=phones;
       
        insert ac;*/
         
        Account acc=new account();
        acc.Name='Virat ';
        acc.Phone='77777777';
        insert acc;
        return acc;
    }
}