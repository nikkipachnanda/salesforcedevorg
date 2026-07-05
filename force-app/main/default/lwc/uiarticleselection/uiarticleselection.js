import { LightningElement } from 'lwc';

export default class Uiarticleselection extends LightningElement 
{
    value = 'inProgress';

    get options() {
        return [
            { label: 'Woolworths  - Supermarkets', value: 'Woolworths  - Supermarkets' }
        ];
    }

    get checkoptions() {
        return [
            { label: '', value: '' }
        ];
    }

    get selectalloptions() {
        return [
            { label: 'Select All', value: '' }
        ];
    }

    get pricefamily() {
        return [
            { label: 'Price Family A', value: '' }
        ];
    }

    get cateory() {
        return [
            { label: '2 Option Selected', value: '2 Option Selected' }
        ];
    }

    handleChange(event) {
        this.value = event.detail.value;
    }
}