import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import {
MatSidenavModule,
MatToolbarModule,
MatTooltipModule,
MatButtonModule,
MatButtonToggleModule,
MatTableModule,
MatCheckboxModule,
MatPaginatorModule,
MatDatepickerModule,
MatNativeDateModule,
MatDividerModule,
MatAutocompleteModule
} from '@angular/material';

import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { PayrollComponent } from './payroll/payroll.component';
import { InvoicingComponent } from './invoicing/invoicing.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { CountryService } from './country.service';
import { EmployeeService } from './employee.service';
import { SalaryThresholdValidatorDirective } from './salary-threshold-validator.directive';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { LoggerService } from './logger.service';


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    TopNavigationComponent,
    PayrollComponent,
    InvoicingComponent,
    AddEmployeeComponent,
    HomeComponent,
    NotFoundComponent,
    ViewEmployeeComponent,
    SalaryThresholdValidatorDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatDividerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [CountryService, EmployeeService, LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
