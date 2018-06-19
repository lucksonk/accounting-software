import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  OnDestroy
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { DataService } from '../../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css']
})
export class SideNavigationComponent implements OnInit, OnDestroy {

  @Output() closeSidenav = new EventEmitter<void>();
  payrollView = true;

  constructor(private dataService: DataService,
              private router: Router) {}

  ngOnInit() {
    this.dataService.currentView.subscribe(payrollView => this.payrollView = payrollView);
  }

  onClose() {
    this.closeSidenav.emit();
  }

  viewEmployeeManagement() {
    this.router.navigateByUrl('/add-employee');
    this.onClose();
  }

  onPaymentsView() {
    this.router.navigateByUrl('/payments');
    this.onClose();
  }

  ngOnDestroy() {
  }
}
