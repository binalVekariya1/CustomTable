import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomTableComponent } from './custom-table/custom-table.component';
import { CustomRowComponent } from './custom-table/custom-row/custom-row.component';
import { CustomColumnComponent } from './custom-table/custom-column/custom-column.component';
import { CustomPaginationComponent } from './custom-table/custom-pagination/custom-pagination.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    CustomTableComponent,
    CustomRowComponent,
    CustomColumnComponent,
    CustomPaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
