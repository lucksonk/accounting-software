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
MatAutocompleteModule
} from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { SideMenuNavigationComponent } from './side-menu-navigation/side-menu-navigation.component';
import { FooterComponent } from './footer/footer.component';
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




@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    TopNavigationComponent,
    SideMenuNavigationComponent,
    FooterComponent,
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
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CountryService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
