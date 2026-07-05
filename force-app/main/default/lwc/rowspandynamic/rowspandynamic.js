import { LightningElement, track } from 'lwc';
export default class Rowspandynamic extends LightningElement {
    @track processedData = [];

    connectedCallback() {
        // Simulated API Response from Apex or MongoDB
        const data = [
            { poNo: 'PO123', recordNo: 'A1', supplierName: 'Supplier A' },
            { poNo: 'PO123', recordNo: 'A2', supplierName: 'Supplier A' },
            { poNo: 'PO124', recordNo: 'B1', supplierName: 'Supplier B' },
            { poNo: 'PO124', recordNo: 'B2', supplierName: 'Supplier B' },
            { poNo: 'PO124', recordNo: 'B3', supplierName: 'Supplier B' },
            { poNo: 'PO121', recordNo: 'C1', supplierName: 'Supplier C' },
            { poNo: 'PO111', recordNo: 'D1', supplierName: 'Supplier D' },
            { poNo: 'PO111', recordNo: 'D2', supplierName: 'Supplier D' },
            { poNo: 'PO111', recordNo: 'D3', supplierName: 'Supplier D' },
            { poNo: 'PO111', recordNo: 'D4', supplierName: 'Supplier D' },
           { poNo: 'PO777', recordNo: 'e', supplierName: 'Supplier e' },
             { poNo: 'PO31', recordNo: 'D1', supplierName: 'Supplier f' },
            { poNo: 'PO31', recordNo: 'D2', supplierName: 'Supplier f' },
            { poNo: 'PO31', recordNo: 'D3', supplierName: 'Supplier f' },
            { poNo: 'PO31', recordNo: 'D4', supplierName: 'Supplier f' },
             { poNo: 'PO31', recordNo: 'D4', supplierName: 'Supplier f' },
              { poNo: 'PO31', recordNo: 'D4', supplierName: 'Supplier f' },
          
        ];

        this.processedData = this.processTableData(data);
    }

    processTableData(data) {
        let groupedData = {};
        
        // Group records by PO No.
        data.forEach(item => {
            if (!groupedData[item.poNo]) {
                groupedData[item.poNo] = { poNo: item.poNo, rowSpan: 0, articles: [] };
            }
            groupedData[item.poNo].articles.push({ 
                ...item, 
                showPoNo: groupedData[item.poNo].rowSpan === 0 // Only for the first occurrence
            });
            groupedData[item.poNo].rowSpan++;
        });

        return Object.values(groupedData);
    }

    // handleAccept(event) {
    //     const poNo = event.target.dataset.id;
    //     console.log(`Accepted PO No: ${poNo}`);
    // }

    // handleReject(event) {
    //     const poNo = event.target.dataset.id;
    //     console.log(`Rejected PO No: ${poNo}`);
    // }
}