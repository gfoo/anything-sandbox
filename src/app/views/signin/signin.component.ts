import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

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

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  authenticate() {
    this.authenticationFailed = false;
    this.authService.authenticate(this.credentials).subscribe(
      response => {
        this.router.navigate(['/']);
      },
      error => {
        this.authenticationFailed = true;
      }
    );
  }
}
