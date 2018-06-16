import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() sidenavToggle = new EventEmitter<void>();

  view = true;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.currentView.subscribe(view => this.view = view);
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  ngOnDestroy() {
  }

  displayPayrollMenu() {
    this.dataService.changeView(true);
    this.onToggleSidenav();
  }

  displayInvoicingMenu() {
    this.dataService.changeView(false);
    this.onToggleSidenav();
  }
}
