import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Observable , of } from 'rxjs';
import { Employee } from './employee';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class EmployeeService {

  employeeUrl: string = './assets/json/employees.json';

  constructor(private http: HttpClient) {
    this.getEmployees().subscribe(data => {
    });
  }

  public getEmployees(): Observable<any> {
    const url = `${this.employeeUrl}`;
    return this.http.get(url);
  }

  getEmployee(id: number): Observable<Employee> {
    const url = `${this.employeeUrl}/${id}`;
    return this.http.get<Employee>(url);
  }
}
