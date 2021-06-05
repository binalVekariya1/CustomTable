import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Employee } from "../model/employee.model";
import { ColumnDef, TableConfig } from '../model/table.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  //Variable Declaration
  tableConfig: TableConfig;
  employeeData: Employee[] = [];
  columnDef: ColumnDef[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.initTableVariable();
    this.readData();
  }

  initTableVariable() {
    this.tableConfig = {
      noOfRecordsPerPage : 15,
      noDataDisplayMessage : "No data for employee."
    }
    this.columnDef = [
      { colId:1,colName: "employeeID", displayName: "ID" ,isSearchable:false},
      { colId:2,colName: "name", displayName: "Name" ,isSearchable:true},
      { colId:3,colName: "firstName", displayName: "First Name",isSearchable:true },
      { colId:4,colName: "middleInitial", displayName: "Middle Initial" ,isSearchable:true},
      { colId:5,colName: "lastName", displayName: "Last Name",isSearchable:true }]

  }

  //read CSV
  readData() {
    this.http.get('assets/employeeDataCSV.csv', { responseType: 'text' })
      .subscribe(
        data => {
          let csvToRowArray = data.split("\n");
          for (let index = 1; index < csvToRowArray.length - 1; index++) {
            let row = csvToRowArray[index].split(",");
            this.employeeData.push(new Employee(parseInt(row[0], 10), row[1], row[2], row[3], row[4]));
          }
        },
        error => {
          console.log(error);
        }
      );
  }

}
