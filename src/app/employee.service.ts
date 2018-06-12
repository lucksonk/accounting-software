import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Employee } from './employee';
import { catchError, map, tap } from 'rxjs/operators';
import { LoggerService } from './logger.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EmployeeService {

  private employeeUrl  = 'api/employee';

  constructor(private http: HttpClient,
              private loggerService: LoggerService) {}

  /** GET List of Employees from the server */
  getEmployees (): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeeUrl)
                    .pipe(
                      catchError(this.loggerService.handleError('getEmployees', []))
                    );
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
  addEmployee (employee: Employee): Observable<Employee> {
    console.log('in add employee service');
    console.log(JSON.stringify(employee));
    return this.http.post<Employee>(this.employeeUrl, employee, httpOptions).pipe(
      tap((newEmployee: Employee) => console.log(`added employee w/ id=${newEmployee.id}`)),
      catchError(this.loggerService.handleError<Employee>('addEmployee'))
    );
  }
}
