import { LightningElement } from 'lwc';

export default class CreditScoreCheck extends LightningElement {
    value = 'select';

    get options() {
        return [
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'No' },
        ];
    }

    handleChange(event) {
        this.value = event.detail.value;
    }
    
}