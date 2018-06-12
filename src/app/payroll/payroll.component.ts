import { Component, ViewChild, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource, MatPaginator} from '@angular/material';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import {FormControl} from '@angular/forms';
import {MatSidenav} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import { Observable } from 'rxjs/Observable';
import {DataSource} from '@angular/cdk/collections';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.css']
})
export class PayrollComponent implements OnInit  {


  employees: Employee[];
  displayedColumns = ['select', 'firstName', 'lastName', 'dateOfBirth', 'income', 'country'];

  dataSource = new EmployeeDataSource(this.employeeService);
  selection = new SelectionModel<Employee>(true, []);


  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private router: Router,
              private employeeService: EmployeeService) {}

  ngOnInit() {
  }

  selectRow(row) {
    console.log(row);
    this.router.navigateByUrl('/view-employee/'+row.id);
  }

  btnClick= function () {
    this.router.navigateByUrl('/add-employee');
};

}

export class EmployeeDataSource extends DataSource<any> {

  constructor(private employeeService: EmployeeService) {
    super();
  }

  connect(): Observable<Employee[]> {
    return this.employeeService.getEmployees();
  }

  disconnect() {}
}

