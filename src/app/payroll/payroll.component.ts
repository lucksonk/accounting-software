import { Component, ViewChild } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource, MatPaginator} from '@angular/material';
import { Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.css']
})
export class PayrollComponent  {
  displayedColumns = ['select', 'firstName', 'lastName', 'dateOfBirth', 'income', 'country'];
  dataSource = new MatTableDataSource<Employee>(ELEMENT_DATA);
  selection = new SelectionModel<Employee>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private router: Router) { }

   /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

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

const ELEMENT_DATA: Employee[] = [
  {firstName: 'Luckson', lastName: 'Karikoga', dateOfBirth: '1980-11-29', income: 10000, country: 'Zimbabwe'},
  {firstName: 'Agnes', lastName: 'Mbalathi', dateOfBirth: '1990-04-29', income: 50000, country: 'South Africa'},
  {firstName: 'Craig', lastName: 'Rupiya', dateOfBirth: '1976-1-09', income: 10000, country: 'Zambia'},
  {firstName: 'Lynn', lastName: 'Goodwill', dateOfBirth: '1980-05-19', income: 45000, country: 'Botswana'},
  {firstName: 'Arnold', lastName: 'Da Silva', dateOfBirth: '1980-04-20', income: 49000, country: 'Mozambique'}


];
