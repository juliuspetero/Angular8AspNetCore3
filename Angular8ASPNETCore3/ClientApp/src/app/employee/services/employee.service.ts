// This is used to inject a dependency to the service class
import { Injectable } from '@angular/core';
import { IEmployee } from '../interfaces/employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// This allow dependency injection
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
     // The constructor will create a private field _http
    constructor(private _http: HttpClient) { }

    // Return an observable of Employee List
    getEmployees(): Observable<IEmployee[]> {
         return this._http.get<IEmployee[]>("https://localhost:44368/api/employees/"); 
    }

}
