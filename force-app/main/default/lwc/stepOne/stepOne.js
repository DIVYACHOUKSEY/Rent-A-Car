import { LightningElement,track } from 'lwc';

export default class StepOne extends LightningElement {
 @track dynamicGreeting  = 'worl';
 greetingChangeHandler(event){
     this.dynamicGreeting = event.target.value;
 }
}