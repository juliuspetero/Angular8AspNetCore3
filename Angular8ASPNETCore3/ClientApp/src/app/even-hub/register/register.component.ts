import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IUserData } from '../models/user-data';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData: IUserData = {
      email: null,
      password: null
  };

    constructor(private authService: AuthenticationService,
                private router: Router) { }

  ngOnInit() {
  }

    registerUser(): void {
        this.authService.registerUser(this.registerUserData)
            .subscribe(response => {
                //console.log(response)
                localStorage.setItem('token', response.token);
                this.router.navigate(['/eventHub/special']);
            },
            error => {
                console.log(error)
    });
  }

}
