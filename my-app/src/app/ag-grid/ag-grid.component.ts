import { Component, Input, SimpleChange} from '@angular/core';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css']
})
export class AgGridComponent {
  @Input() ColumnDefs: any;
  @Input() RowData: any;
  @Input() IsColumnsToFit: boolean;
 
  gridApi: any;
  gridColumnApi: any;

  ngOnChanges(changes: SimpleChange){
    console.log(changes);
  //  if(changes['columnDefs'].currentValue){
   //   this.ColumnDefs= changes['columnDefs']?.currentValue;
  //  }
    // if(changes['RowData'].currentValue){
      this.RowData= changes['RowData'].currentValue;
    // }
    // if(changes['columnIsColumnsToFitDefs'].currentValue){
    //  this.IsColumnsToFit= changes['columnIsColumnsToFitDefs']!.currentValue;
    // }

  }
  BindData(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.setRowData(this.RowData);
    if (this.IsColumnsToFit) {
      this.gridApi.sizeColumnsToFit();
    }
  }
}
