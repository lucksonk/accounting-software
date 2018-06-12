import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { LoggerService } from './logger.service';
import { catchError, map, tap } from 'rxjs/operators';
import { Country } from './country';

@Injectable()
export class CountryService {

  private countryUrl  = 'api/country';

  constructor(private http: HttpClient,
              private loggerService: LoggerService) {}

  /** GET List of countries from the server */
  getCountries (): Observable<Country[]> {
    return this.http.get<Country[]>(this.countryUrl)
                    .pipe(
                      catchError(this.loggerService.handleError('getCountries', []))
                    );
  }
}
