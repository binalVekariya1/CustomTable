export interface TableConfig{
    noOfRecordsPerPage:number;
    noDataDisplayMessage:string;
}

export interface ColumnDef{
    colId:number;
    colName:string;
    displayName:string;
    isSearchable:boolean;
}

export interface RowData{
    colId:number;
    colValue:string;
}