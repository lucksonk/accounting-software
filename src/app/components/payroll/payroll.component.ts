import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource, MatPaginator, MatSort} from '@angular/material';
import { Router } from '@angular/router';
import {FormControl} from '@angular/forms';
import {MatSidenav} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import { Observable } from 'rxjs/Observable';
import {DataSource} from '@angular/cdk/collections';
import { Subscription } from 'rxjs';
import { Employee } from '../employee/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.css']
})
export class PayrollComponent implements OnInit , AfterViewInit   {
  displayedColumns = ['firstName', 'lastName', 'dateOfBirth', 'income', 'country'];
  dataSource = new MatTableDataSource<Employee>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  employees: Employee[] = [];

  constructor(private router: Router,
              private employeeService: EmployeeService) {}

  ngOnInit() {
    this.getEmployeesOnPayroll();
  }

  getEmployeesOnPayroll(): void {
    this.employees = this.employeeService.getEmployeesOnPayroll();
    this.dataSource.data = this.employees;
  }

   ngAfterViewInit() {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
   }

   doFilter(filterValue: string) {
     this.dataSource.filter = filterValue.trim().toLowerCase();
   }

  selectRow(row) {
    console.log(row);
    this.router.navigateByUrl('/view-employee/' + row.id);
  }

  viewAddEmployee = function () {
    this.router.navigateByUrl('/add-employee');
  };

}
