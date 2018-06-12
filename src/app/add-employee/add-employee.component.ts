import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { FormControl, FormGroup, Validators} from '@angular/forms';

import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import { Router } from '@angular/router';
import { CountryService } from '../country.service';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Country } from '../country';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
  providers: [CountryService]
})
export class AddEmployeeComponent implements OnInit {
  employees:  Array<Employee> = [];

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
    {name: 'Zimbabwe', code: 'ZW'}
  ];

  constructor(private router: Router,
              private countryService: CountryService) {

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
  ngOnInit() {
    console.log('in constructor of add employee ***');
    this.countryService.getCountries().subscribe(data => {
      console.log('countries data');
      this.countries = data;
      console.log(JSON.stringify(data));
    });
    console.log('countries length ' + this.countries.length);
  }

  btnClick= function () {
    this.router.navigateByUrl('/payroll');
};

  addEmployee() {
    console.log('Submitted add employee 2');
    this.employees.unshift(this.employee);
    console.log(JSON.stringify(this.employees));

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
