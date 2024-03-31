import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faChartSimple, faClock, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [MatIconModule, FontAwesomeModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {

  iconUser = faUser;
  iconChart = faChartSimple;
  iconHistory = faClock;
  iconLogout = faRightFromBracket;
  isSlideOut = true;

  toggleSlideOut(): void {
    this.isSlideOut = !this.isSlideOut;
  }

  constructor(private router: Router) { }


  onDash() {
    this.router.navigate(['/budget-planner/dashboard']);
  }

  onProfile() {
    this.router.navigate(['/budget-planner/profile']);
  }

  onHistory() {
    this.router.navigate(['/budget-planner/history']);
  }

  onLogout() {
    this.router.navigate(['/budget-planner/login']);
  }
}
