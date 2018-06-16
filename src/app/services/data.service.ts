import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class DataService {

  private defaultPayrollView = new BehaviorSubject<boolean>(true);
  currentView = this.defaultPayrollView.asObservable();

  constructor() {}

  changeView(payrollView: boolean) {
    this.defaultPayrollView.next(payrollView);
  }

}
