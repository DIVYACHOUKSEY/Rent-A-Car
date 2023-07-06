import { LightningElement } from 'lwc';

export default class SecondTab extends LightningElement {


    customersupport(){
      
        this.template.querySelector('lightning-input').value = "Customer support number = 09090909090";
    
        
    }
 
}