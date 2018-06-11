import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PayrollComponent } from './payroll/payroll.component';
import { InvoicingComponent } from './invoicing/invoicing.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'payroll', component: PayrollComponent},
  {path: 'invoicing', component: InvoicingComponent},
  {path: 'add-employee', component: AddEmployeeComponent},
  {path: 'view-employee/:employee', component: ViewEmployeeComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
