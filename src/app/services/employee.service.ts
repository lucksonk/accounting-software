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

  constructor(private http: HttpClient,
              private loggerService: LoggerService) {}

  /** GET List of Employees from the server */
  getEmployees (): Observable<Employee[]> {
     return this.http.get<Employee[]>(this.employeeUrl)
                    .pipe(
                      tap(employeez => {console.log(`fetched employees`); this.employeePayrollList.next(employeez); }  ),
                      catchError(this.loggerService.handleError('getEmployees', []))
                    );
  }

  getEmployeesOnPayroll(): Observable<Employee[]>  {
    return this.getEmployees();
  }

  /** GET Employee by id. Will 404 if id not found */
getEmployee(id: number): Observable<Employee> {
  const url = `${this.employeeUrl}/${id}`;
  return this.http.get<Employee>(url).pipe(
    tap(_ => console.log(`fetched employee id=${id}`)),
    catchError(this.loggerService.handleError<Employee>(`getEmployee id=${id}`))
  );
}

  /** POST: add a new Employee to the server */
   addEmployee (employee: Employee) {
    console.log('in add employee service');
    console.log(JSON.stringify(employee));
    //this.getEmployeesOnPayroll().subscribe(employees => );

  // this.employeePayrollList.next(employee);

  }


}
