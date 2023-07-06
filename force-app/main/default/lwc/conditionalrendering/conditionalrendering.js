import { LightningElement,track } from 'lwc';

export default class Conditionalrendering extends LightningElement {
@track displayDiv = false;
@track cityList =['Jaipur','India','Pune'];
showDivHandler(event){
   this.displayDiv = event.target.checked;
}
}