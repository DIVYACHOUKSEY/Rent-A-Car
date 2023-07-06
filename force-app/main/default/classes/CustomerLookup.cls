public with sharing class CustomerLookup {
    @AuraEnabled(cacheable=true)
    public static List<Customer2__c> getCustomerLookup (String csName){
        List<Customer2__c> customerLookupList =  new List<Customer2__c>();
        if(csName != ''){
            String customerName = '%' + csName + '%';
            customerLookupList = [Select Id, Name From Customer2__c Where Name like:customerName];
            return customerLookupList;
        }
        return customerLookupList;
     }   
}