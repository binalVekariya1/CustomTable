import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-row',
  templateUrl: './custom-row.component.html',
  styleUrls: ['./custom-row.component.scss']
})
export class CustomRowComponent implements OnInit {

  @Input() colKeys:string[];
  @Input() rowData:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
