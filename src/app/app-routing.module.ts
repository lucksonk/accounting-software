import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PayrollComponent } from './components/payroll/payroll.component';
import { InvoicingComponent } from './components/invoicing/invoicing.component';
import { AddEmployeeComponent } from './components/employee/add-employee/add-employee.component';
import { ViewEmployeeComponent } from './components/employee/view-employee/view-employee.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'payments', component: PayrollComponent},
  {path: 'invoicing', component: InvoicingComponent},
  {path: 'add-employee', component: AddEmployeeComponent},
  {path: 'view-employee/:id', component: ViewEmployeeComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
