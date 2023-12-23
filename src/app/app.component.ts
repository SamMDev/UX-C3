import {Component, EventEmitter, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;

  openedSidebar: boolean;
  sidebarOpenedEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  isMobile: boolean;

  mobileQuery: MediaQueryList = window.matchMedia("(max-width: 599px)");

  constructor() {
    this.mobileQuery.addEventListener('change', this.handleScreenChange);
    this.handleScreenChange(this.mobileQuery);
  }

  clickedMenu() {
    this.openedSidebar = !this.openedSidebar;
  }

  handleScreenChange(e: any) {
    if (e.matches) {
      this.isMobile = true;
      this.openedSidebar = false;
    } else {
      this.isMobile = false;
    }
  }

}
