import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { IUserData} from '../models/user-data';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

    private registerUrl = `http://localhost:3000/api/register`;
    private loginUrl = `http://localhost:3000/api/login`;

    constructor(private http: HttpClient, private router: Router ) { }

    // Register a new user
    registerUser(user: IUserData): Observable<any> {
        return this.http.post<any>(this.registerUrl, user)
    }

    // Login a registered user
    loginUser(user: IUserData): Observable<any> {
        return this.http.post<any>(this.loginUrl, user)
    }

    // This is used in the authentication guard
    isLoggedIn(): boolean {
        // Returns true when token is present
        return !!localStorage.getItem('token');
    }

    // Get the token from the local storage
    getToken(): string {
        return localStorage.getItem('token');
    }

    logoutUser(): void {
        localStorage.removeItem('token')
        this.router.navigate(['/eventHub/events']);
    }

    
}
