/*import { LightningElement ,wire} from 'lwc';
import getAllAccount from '@salesforce/apex/AccountManager.getAccount'
export default class AccountManagerApex extends LightningElement {
    @wire(getAllAccount)
    accounts;
    get responseReceived(){
        if(this.accounts){
            return true;
        }
        return false;
    }
}*/
import { LightningElement ,track} from 'lwc';
import getAllAccount from '@salesforce/apex/AccountManager.getAccount'
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class AccountManagerApex extends LightningElement {
    @track numberOfRecords;
    @track accounts;
    
   
    get responseReceived(){
        if(this.accounts){
            return true;
        }
        return false;
    }
    numberOfAccountChangeHandler(event){
        this.numberOfRecords = event.target.value;
    }
    getAccounts(){
        getAllAccount({numberOfRecords:this.numberOfRecords}).then(response =>{
            this.accounts = response;
            const toastEvent = new ShowToastEvent({
             title : 'Accounts Loaded',
             message : this.numberOfRecords +'Accounts Fetched From Server',
             variant : 'success'
            });
            this.dispatchEvent(toastEvent);
        }).catch(error =>{
            console.error('Error in getting the account',error.body.message);
            const toastEvent = new ShowToastEvent({
                title : 'Error',
                message : error.body.message,
                variant : 'error'
               });
               this.dispatchEvent(toastEvent);
        })
    }
}