import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class CountryService {

  constructor(private http: HttpClient) {
    this.getCountries().subscribe(data => {
    });
  }

  public getCountries(): Observable<any> {
    return this.http.get('./assets/json/countries.json');
  }
}
