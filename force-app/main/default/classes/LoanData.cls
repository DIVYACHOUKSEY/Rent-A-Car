public with sharing class LoanData {
    @AuraEnabled(cacheable=true)
   public static List<Loan__c> getLoanData(String recordId){
       return [SELECT Id,Name,Customer2__c,Interest_Rate__c,Loan_Amount__c,
       Payment_Schedule__c,Status__c FROM Loan__c WHERE Name =:recordId];
   }
}