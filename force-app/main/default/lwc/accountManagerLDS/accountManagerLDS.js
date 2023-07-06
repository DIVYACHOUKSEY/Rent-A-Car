import { LightningElement,track  ,wire,api} from 'lwc';
import { createRecord,getRecord } from "lightning/uiRecordApi";
import { NavigationMixin } from 'lightning/navigation';
import LoanApplications from '../loanApplications/loanApplications';


const fieldArray= ['Account.Name', 'Account.Phone', 'Account.Website'];
export default class AccountManagerLDS  extends NavigationMixin(LightningElement) {
  /* @track accountName;
    @track accountPhone;
    @track accountWebsite;
   @track recordId;
   @wire(getRecord,{recordId:'$recordId',fields: fieldArray})
   accountRecord;
    accountNameChangeHandler(event){
        this.accountName = event.target.value;
    }
    accountPhoneChangeHandler(event){
        this.accountPhone = event.target.value;
    }
    accountWebsiteChangeHandler(event){
        this.accountWebsite = event.target.value;
    }
    createAccount(){
        const fields ={'Name':this.accountName,'Phone':this.accountPhone,'Website':this.accountWebsite};
         const recordInput = {apiName :'Account', fields};
         createRecord(recordInput).then(response =>{
           console.log('Account has been created',response.id);
           this.recordId = response.id;
         }).catch(error =>{
             console.error('Account is not created',error.body.message);
         });
    }

    get retAccounName(){
        if(this.accountRecord.data){
            return this.accountRecord.data.fields.Name.value;
        }
        return undefined;
    }
    get retAccounPhone(){
        if(this.accountRecord.data){
            return this.accountRecord.data.fields.Phone.value;
        }
        return undefined;
    }get retAccounWebsite(){
        if(this.accountRecord.data){
            return this.accountRecord.data.fields.Website.value;
        }
        return undefined;
    }
    
  */
        @track accountName;
        @track accountPhone;
        @track accountWebsite;
    
        @track recordId;
    
        @wire(getRecord, {recordId: '$recordId', fields: fieldArray})
        accountRecord;
    
        accountNameChangeHandler(event){
            this.accountName = event.target.value;
        }
    
        accountPhoneChangeHandler(event){
            this.accountPhone = event.target.value;
        }
    
        accountWebsiteChangeHandler(event){
            this.accountWebsite = event.target.value;
        }
    
        createAccount(){
            const fields = {'Name' : this.accountName, 'Phone' : this.accountPhone, 'Website': this.accountWebsite};
            const recordInput = {apiName : 'Account', fields};
    
            createRecord(recordInput).then(response => {
                console.log('Account has been created : ', response.id);
                this.recordId = response.id;
                this[NavigationMixin.Navigate]({
                    type: 'standard__navItemPage',
                    attributes: {
                        apiName: this.LoanApplications,
                    },
                });
            }).catch(error =>{
                console.error('Error in creating account : ', error.body.message);
            });
        }

     
    
        get retAccountName(){
            if(this.accountRecord.data){
                return this.accountRecord.data.fields.Name.value;
            }
            return undefined;
        }
    
        get retAccountPhone(){
            if(this.accountRecord.data){
                return this.accountRecord.data.fields.Phone.value;
            }
            return undefined;
        }
    
        get retAccountWebsite(){
            if(this.accountRecord.data){
                return this.accountRecord.data.fields.Website.value;
            }
            return undefined;
        }


}