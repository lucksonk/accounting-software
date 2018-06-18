import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs';
import { of } from 'rxjs/observable/of';

import { catchError, map, tap } from 'rxjs/operators';
import { LoggerService } from './logger.service';
import { Employee } from '../components/employee/employee';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EmployeeService {

  private employeeUrl  = 'api/employees';

  private employeePayrollList = new BehaviorSubject<Employee[]>([]);
  employees = this.employeePayrollList.asObservable();

  private employeeList: Employee[] = [];

  constructor(private http: HttpClient,
              private loggerService: LoggerService) {}

  getEmployeesOnPayroll() {
    return this.employeeList;
  }

  getEmployee(id: number) {
    var i : any;

    for (i in this.employeeList) {
      if (this.employeeList[i].id === id) {
        return this.employeeList[i];
      }
    }

  }

  addEmployee (employee: Employee): void {
    console.log('in add employee service');
    console.log(JSON.stringify(employee));
    employee.id = (this.employeeList.length + 1);
    this.employeeList.push(employee);
  }

}
