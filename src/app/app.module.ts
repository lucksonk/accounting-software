import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HttpClientModule } from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import {MatMomentDateModule} from '@angular/material-moment-adapter';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MaterialModule } from './material.module';
import { SideNavigationComponent } from './components/navigation/side-navigation/side-navigation.component';
import { PayrollComponent } from './components/payroll/payroll.component';
import { AddEmployeeComponent } from './components/employee/add-employee/add-employee.component';
import { ViewEmployeeComponent } from './components/employee/view-employee/view-employee.component';
import { SalaryThresholdValidatorDirective } from './directives/salary-threshold-validator.directive';
import { InvoicingComponent } from './components/invoicing/invoicing.component';
import { InMemoryDataService } from './services/in-memory-data.service';

import { EmployeeService } from './services/employee.service';
import { DataService} from './services/data.service';
import { LoggerService } from './services/logger.service';
import { HeaderComponent } from './components/navigation/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavigationComponent,
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
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [EmployeeService, LoggerService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
