public with sharing class AccountContactController {
    @AuraEnabled(cacheable = true)
    public static List<Contact> getContacts(){
        return [SELECT Id, Name, FirstName,LastName, Phone, Email, Account.Name FROM Contact
        Where AccountId != '' Order by LastName DESC limit 10];
    }
    //Fetch all related cases 
    @AuraEnabled(cacheable = true)
    public static List<Case> getCases(String accountId){
        List<Case> lstCase = new List<Case>();
        if(accountId != null){
            lstCase = [Select id, AccountId, CaseNumber, Account.Name, Contact.Name, Status, Origin    from Case Where AccountId =: accountId];
        }	
        return lstCase;
    }   
}
