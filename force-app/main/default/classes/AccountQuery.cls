public with sharing class AccountQuery {
    public static void AccountQueryToList() {
        List<Account> AccList= [select Name from Account];
        for(account a: AccList){
            System.debug('List print '+ a);
        }

    }
}
