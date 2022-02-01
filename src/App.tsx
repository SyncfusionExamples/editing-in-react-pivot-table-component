import React from 'react';
import { PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import {pivotData} from './data';
import './App.css';

function App() {
 return (
    <div id="wrapper">
      <PivotViewComponent 
        dataSourceSettings={{
          dataSource: pivotData,
          rows: [{ name: 'Country' }, {name: 'Products'}],
          columns: [{ name: 'Year' }],
          values: [
            { name: 'Sold', caption: 'Units Sold' }, 
            { name: 'Amount', caption: 'Sold Amount' }
          ],
          formatSettings: [{ name: 'Amount' }]
        }}
        displayOption={{view: "Chart"}}
        chartSettings={{chartSeries:{type:"Column"}}}
        editSettings={{
          mode:'Batch',
          allowInlineEditing: true,
          allowCommandColumns: true,
          allowEditing: true,
          allowAdding: true,
          allowDeleting: true
        }}
        >
      </PivotViewComponent>
    </div>
  );
}

export default App;
