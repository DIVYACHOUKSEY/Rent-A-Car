import { LightningElement ,track } from 'lwc';
import { createRecord } from "lightning/uiRecordApi";
import { NavigationMixin } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


export default class LoanApplication extends NavigationMixin(LightningElement) {

    @track customerName;
    @track loanAmount;
    @track interestRate;
    @track selectedCustomer;
    @track loanId;
   


   loanNameChangeHandler(event){
      this.customerName =  event.target.value ;
   }

   loanAmountChangeHandler(event){
       this.loanAmount = event.target.value;
   }
   interstRateChangeHandler(event){
       this.interestRate = event.target.value;
   }



  /* customerLookup(event){
    console.log(event.detail);
              this.selectedCustomer = event.target.Detail;
    }*/
   applyLoan(){
    const fields ={'Name':this.customerName,'Loan_Amount__c':this.loanAmount,'Interest_Rate__c':this.interestRate,
    'Customer2__c':this.selectedCustomer};
     const recordInput = {apiName :'Loan__c', fields};
     createRecord(recordInput).then(response =>{
         this.loanId =response.id
         
       console.log('Application has been submitted',response.id);
       this.recordId = response.id;
       this.dispatchEvent(
        new ShowToastEvent({
            title: 'Success',
            message: 'Applied for loan Successfully!',
            variant: 'success',
        }),
    );
       this[NavigationMixin.Navigate]({
        type : 'standard__objectPage',
        attributes :{
            objectApiName : 'Loan__c',
            actionName :'home'
        }
    });

     }).catch(error =>{
         console.error('Appication is Failed',error.body.message);
         this.showToast('ERROR', error.body.message, 'error');
     });
     
}
showtoast(title,message,variant){
    const evt = new ShowToastEvent({
        title :title,
        message:message,
        variant:variant,
    });
    this.dispatchEvent(evt);
}
}