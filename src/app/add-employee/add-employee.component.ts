import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { FormControl, FormGroup, Validators} from '@angular/forms';

import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Country } from '../country';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employees: Observable<Employee[]>;

  employee: Employee = {
    id: null,
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    income: null,
    country: ''
  };

  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  country: Country = {
    name: '',
    code: ''
  };

  countryCtrl: FormControl;
  filteredCountries: Observable<any[]>;
  countries: Array<Country> = [
    {name: 'South Africa', code: 'ZA'},
    {name: 'Zambia', code: 'ZM'},
    {name: 'Zimbabwe', code: 'ZW'},
    {name: 'United Kingdom', code: 'GB'},
    {name: 'United States', code: 'US'}
  ];

  constructor(private router: Router,
              private employeeService: EmployeeService) {

    this.countryCtrl = new FormControl();
    this.filteredCountries = this.countryCtrl.valueChanges
      .pipe(
        startWith(''),
        map(country => country ? this.filterCountries(country) : this.countries.slice())
      );
   }

   filterCountries(name: string) {
    return this.countries.filter(country =>
      country.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }
  ngOnInit() {}

  addEmployee() {
    this.employeeService.addEmployee(this.employee);
    console.log('Add employee ' + JSON.stringify(this.employee));

   this.router.navigateByUrl('/payroll');

    this.employee = {
      id: null,
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      income: null,
      country: ''
    };
  }

}
