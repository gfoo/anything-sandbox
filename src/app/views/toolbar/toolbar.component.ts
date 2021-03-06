import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { UserModel } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'any-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit, OnDestroy {
  user: UserModel;
  userEventsSubscription: Subscription;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.userEventsSubscription = this.authService.userEvents.subscribe(
      user => (this.user = user)
    );
  }

  ngOnDestroy() {
    if (this.userEventsSubscription) {
      this.userEventsSubscription.unsubscribe();
    }
  }

  onProjLL() {
    this.router.navigate(['/projetll']);
  }
  onThings() {
    this.router.navigate(['/things']);
  }

  onSearches() {
    this.router.navigate(['/searches']);
  }

  onActus() {
    this.router.navigate(['/actus']);
  }

  onEdit() {
    this.router.navigate(['/edition']);
  }
  onProjects() {
    this.router.navigate(['/projects']);
  }

  onLogout() {
    event.preventDefault();
    this.authService.logout();
    this.router.navigate(['/']);
  }

  doSearch(searchElt: HTMLElement) {
    this.router.navigate(['/searches']);
  }
}
