import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

export default class Navigationexample extends  NavigationMixin(LightningElement) {

    openSFDCFacts(){
this[NavigationMixin.Navigate]({
  type :'standard_webPage',
  attributes :{
      url:'https://sfdcfacts.com'
  }
});
    }

    openAccountHome(){
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes :{
                objectApiName : 'Account',
                actionName :'home'
            }
        });
    }
    createNewContact(){
        this[NavigationMixin.Navigate]({
            type :'standard__objectPage',
            attributes :{
                objectApiName:'Contract',
                actionName :'new'
            }
        });
    }

    openOppListView(){
        this[NavigationMixin.Navigate]({
            type :'standard__objectPage',
            attributes :{
                objectApiName: 'Opportunity',
            actionName :'list'
            }
        });
    }
    openCaseRecord(){
        this[NavigationMixin.Navigate]({
            type :'standard__recordPage',
            attributes :{
                recordId : "5005j00000V7QMKAA3",
                objectApiName :'Case',
                actionName :'view'
            }
        });
    }
    openMeetingRoom(){
        this[NavigationMixin.Navigate]({
            type :'standard__navItemPage',
            attributes:{
                apiNAme :'Meeting__Room'
            }
        });
    }
    previewFile(){
        this[NavigationMixin.Navigate]({
            type :'standard__namedPage',
            attributes:{
                pageName :'fieldPreview'
            },state :{
                recordIds :'5005j00000V7QMKAA3,5005j00000RU7hiAAD',
                selectedRecordId : '5005j00000V7QMKAA3'
            }
        });
    }
}