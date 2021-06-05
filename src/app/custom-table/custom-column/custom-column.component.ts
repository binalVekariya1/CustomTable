import { Component, Input, OnInit } from '@angular/core';
import { ColumnDef } from 'src/app/model/table.model';

@Component({
  selector: 'app-custom-column',
  templateUrl: './custom-column.component.html',
  styleUrls: ['./custom-column.component.scss']
})
export class CustomColumnComponent implements OnInit {
  @Input() columnDef:ColumnDef;
  constructor() { }

  ngOnInit(): void {
  }

}
