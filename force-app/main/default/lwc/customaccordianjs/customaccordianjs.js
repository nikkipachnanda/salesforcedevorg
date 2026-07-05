import { LightningElement, track } from 'lwc';
export default class Customaccordianjs extends LightningElement {

    @track records = [
    {
      id: 'r1',
      detailKey: 'detail_r1',
      label: 'Row 1',
      detail: 'Row 1 Data',
      isOpen: false,
      options: [{ label: 'opt1', value: 'option1' }],
      value: ''
    },
    {
      id: 'r2',
      detailKey: 'detail_r2',
      label: 'Row 2',
      detail: 'Row 2 Data 2222',
      isOpen: false,
      options: [{ label: 'opt2', value: 'option2' }],
      value: ''
    },
    {
      id: 'r3',
      detailKey: 'detail_r3',
      label: 'Row 3',
      detail: 'Row 3 Data',
      isOpen: false,
      options: [{ label: 'opt3', value: 'option3' }],
      value: ''
    }
  ];

  // Toggle a single row (independent)
  toggleRow = (event) => {
    const id = event.currentTarget.dataset.id;
    this.records = this.records.map(r =>
      r.id === id ? { ...r, isOpen: !r.isOpen } : r
    );
  };

  // Expand/Collapse all
  toggleCollapse = (event) => {
    const open = event.target.checked; // true => Collapse All (per your labels)
    this.records = this.records.map(r => ({ ...r, isOpen: open }));
  };

  // Prevent radio clicks from toggling the row
  stopToggle = (event) => {
    event.stopPropagation();
  };

  // Track radio selection per row
  onRadioChange = (event) => {
    const id = event.target.name;
    const value = event.detail.value;
    this.records = this.records.map(r =>
      r.id === id ? { ...r, value } : r
    );
  };

}