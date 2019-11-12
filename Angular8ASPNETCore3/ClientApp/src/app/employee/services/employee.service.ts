// This is used to inject a dependency to the service class
import { Injectable } from '@angular/core';
import { IEmployee } from '../interfaces/employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators'; 


// This allow dependency injection so that the instance of the service class can injected in other components who might need it
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
     // The constructor will create a private field _http
    constructor(private _http: HttpClient) { }

    // Return an observable of Employee List
    getEmployees(): Promise<IEmployee[]> {
         return this._http.get<IEmployee[]>("https://localhost:44368/api/employees/").toPromise(); 
    }

    // The return for us an observable (Task) of IEmployee 
    getEmployeeByCode(empCode: string): Observable<IEmployee> {
        return this._http.get<IEmployee>(`https://localhost:44368/api/employees/${empCode}`);
    } 

}
