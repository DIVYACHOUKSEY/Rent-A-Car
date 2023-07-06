import { LightningElement, track,wire } from 'lwc';
import getCustomerLookup from '@salesforce/apex/CustomerLookup.getCustomerLookup';
 
export default class LwcAccountCustomLookup extends LightningElement {
    
 @track customerName='';
 @track customerList=[];
 @track objectApiName='Customer2__c';
 @track customerId;
 @track isShow=false;
 @track messageResult=false;
 @track isShowResult = true;
 @track showSearchedValues = false;
 @wire(getCustomerLookup,{csName:'$customerName'})
 retrieveCustomer ({error,data}){
     this.messageResult=false;
     if(data){
         console.log('data## ' + data.length);
         if(data.length>0 && this.isShowResult){
            this.customerList =data;
            this.showSearchedValues=true;
            this.messageResult=false;
         }
         else if(data.length === 0){
            this.customerList=[];
            this.showSearchedValues=false;
            if(this.customerName !== ''){
               this.messageResult=true;
            }
         }
         else if(error){
             this.customerId='';
             this.customerName='';
             this.customerList=[];
             this.showSearchedValues=false;
             this.messageResult=true;
         }
 
     }
 }
 
 
 
 searchHandleClick(event){
  this.isShowResult = true;
  this.messageResult = false;
}
 
 
searchHandleKeyChange(event){
  this.messageResult=false;
  this.customerName = event.target.value;
}
 
parentHandleAction(event){        
    this.showSearchedValues = false;
    this.isShowResult = false;
    this.messageResult=false;
    //Set the parent calendar id
    this.customerId =  event.target.dataset.value;
    //Set the parent calendar label
    this.customerName =  event.target.dataset.label;      
    console.log('customerId::'+this.customerId);    
    const selectedEvent = new CustomEvent('selected', { detail: this.customerId });
        // Dispatches the event.
    this.dispatchEvent(selectedEvent);    
}
 
}