
import { LightningElement ,track,api } from 'lwc';
import saveresult from '@salesforce/apex/CustomerSupportDetail.acct';
import {
  ShowToastEvent} from 'lightning/platformShowToastEvent'

export default class Submit extends LightningElement 
{
  @api name;

  namehandle(event){
    this.name = event.target.value
  }

  handleclick(){
  saveresult({
    n:this.name
  }).then(response =>{
    if(response === 'success'){
      this.dispatchEvent(new ShowToastEvent({
        title : 'Success',
        message : 'Case created successfully',
        variant : 'success'
      }));
    }else{
      this.dispatchEvent(new ShowToastEvent({
        title : 'Error',
        message : 'Something went Wrong',
        variant: 'error'
      }));
    }

  }).catch(error => {
    console.log('error :',error);
  });
}


}


