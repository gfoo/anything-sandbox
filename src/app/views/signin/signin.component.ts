import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'any-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  credentials = {
    email: '',
    password: ''
  };
  authenticationFailed = false;
  hide = true;

  constructor(
    private router: Router,
    private authService: AuthService,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  authenticate() {
    this.authenticationFailed = false;
    this.authService.authenticate(this.credentials).subscribe(
      response => {
        this.router.navigate(['/']);
      },
      error => {
        this.authenticationFailed = true;
        this.snackBar.open('Erreur de connection', 'Close', {
          panelClass: ['snack-bar-color'],
          duration: 2000
        });
      }
    );
  }
}
