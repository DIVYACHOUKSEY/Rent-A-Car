import { LightningElement,wire,track,api } from 'lwc';
import getLoanData from '@salesforce/apex/LoanData.getLoanData';
import STATUS__C_FIELD from '@salesforce/schema/Loan__c.Status__c'
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class LoanProcessing extends LightningElement {
    @track  loanRecords;
    @track recordID;
    @api recordId;
    Status__c =  STATUS__C_FIELD;

    toggleFields(event) {
       this.recordId = event.target.value;
    }
    handelId(event){
        this.recordID = event.target.value;
    }
    
    toasteventHandler(){
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success',
                message: 'Applied for loan Successfully!',
                variant: 'success',
            }),
        );
    }
    /*checkLoanRecord(){
        getLoanData({recordID: '$recordId'})
        .then(result => {
                this.loanRecords = result;
        })
        .catch( error=>{
            this.loanRecords = null;
        });
    }
*/
}