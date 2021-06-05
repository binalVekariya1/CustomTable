import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { ColumnDef, TableConfig } from '../model/table.model';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit {

  @Input() tableConfig: TableConfig;
  @Input() columnDef: ColumnDef[];
  @Input() rowData: any;
  @Input() totalRecords: number;

  public colKeys: string[];
  public searchableColumns: string[];
  _rowData: any;
  _searchValue: string;
  _searchValueChanged: Subject<string> = new Subject<string>();

  constructor() { }

  ngOnInit(): void {
    this.setDefaultConfig();
    this.initColKeys();
    this.registerSearchEvent();
  }

  registerSearchEvent() {
    this._searchValueChanged.pipe(
      debounceTime(400),
      distinctUntilChanged()
    )
      .subscribe(model => { this._searchValue = model; this.filterRowData() });
  }

  initColKeys() {
    this.colKeys = this.columnDef.map(t => t.colName);
    this.searchableColumns = this.columnDef.filter(t => t.isSearchable).map(t => t.colName);
  }

  setDefaultConfig() {
    this.tableConfig.noOfRecordsPerPage = this.tableConfig.noOfRecordsPerPage || 10;
    this.tableConfig.noDataDisplayMessage = this.tableConfig.noDataDisplayMessage || "No records found";
  }

  displayActivePage(pageNo) {
    let endRecordIndex = pageNo * this.tableConfig.noOfRecordsPerPage;
    this._rowData = this.rowData.slice(endRecordIndex - this.tableConfig.noOfRecordsPerPage, endRecordIndex);
  }

  onSearch(text: string) {
    this._searchValueChanged.next(text);
  }

  filterRowData() {
    var filterData: any = [];
    this.rowData.filter(function (row) {

      this.searchableColumns.forEach(columnKey => {
        if (row[columnKey].includes(this._searchValue)) {
          filterData.push(row);
        }
      });

    })
    this._rowData = filterData;
  }

}
