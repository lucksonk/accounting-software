import { Component, ViewChild, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource, MatPaginator} from '@angular/material';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.css']
})
export class PayrollComponent implements OnInit  {

  employees: Employee[];
  displayedColumns = ['select', 'firstName', 'lastName', 'dateOfBirth', 'income', 'country'];
//  dataSource = new MatTableDataSource<Employee>(ELEMENT_DATA);
  selection = new SelectionModel<Employee>(true, []);
  dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private router: Router,
              private employeeService: EmployeeService) {
    console.log('*** in constructor **');
  }

  ngOnInit(): void {
    console.log('*** in init **');
   /* this.employeeService.getEmployees().subscribe(data => {
      console.log('countries data');
      this.dataSource =  new MatTableDataSource<Employee>(data);
      console.log(JSON.stringify(data));
    });*/
    this.getEmployees();
    console.log(this.employees);
  }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe(employees => this.employees = employees);
  }


   /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
 // ngAfterViewInit() {
   // this.dataSource.paginator = this.paginator;
//  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
  selectRow(row) {
    console.log(row);
    console.log('### selected row ##');
    this.router.navigateByUrl('/view-employee');
  }

  btnClick= function () {
    this.router.navigateByUrl('/add-employee');
};

}

const ELEMENT_DATA: Employee[] = [];
