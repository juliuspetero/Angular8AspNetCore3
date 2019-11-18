import { Component, OnInit } from '@angular/core';
import { IUserData } from '../models/user-data';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginUserData: IUserData = {
        email: null,
        password: null
    };

    constructor(private authService: AuthenticationService,
                private router: Router) { }

  ngOnInit() {
  }

    loginUser(): void {
        this.authService.loginUser(this.loginUserData)
            .subscribe(response => {
                console.log(response);
                localStorage.setItem('token', response.token);
                this.router.navigate(['/eventHub/special'])

            },
            error => {
                console.log(error);
            });
    }

}
