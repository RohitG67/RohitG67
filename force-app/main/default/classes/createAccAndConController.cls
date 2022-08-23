public with sharing class createAccAndConController {
    @AuraEnabled
    public static void createAcc(string name,string phone,string email,string lname,string fname) {
     Account a=new Account();
     a.Name=name;
     a.Phone=phone;
    
     insert a;

     contact c=new contact();
     c.FirstName=fname;
     c.LastName=lname;
     c.Email=email;
     c.Phone=phone;
     c.AccountId=a.id;

     insert c;
     
    }
}
