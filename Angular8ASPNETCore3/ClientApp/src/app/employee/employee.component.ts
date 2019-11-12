import { Component, OnInit } from '@angular/core';
import { IEmployee } from './interfaces/employee';
import { ActivatedRoute, Router } from '@angular/router';
import { retry, retryWhen, delay, scan } from 'rxjs/operators';

import { EmployeeService } from './services/employee.service';
import { Observable, Subscription } from 'rxjs';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  //DEMO AT THE HTML
  //firstName: string = 'Tom';
  //lastName: string = 'Hopkins';
  //gender: string = 'Male';
  //age: number = 20;  
  //showDetails: boolean = false;

// ngModel can change this property but if need the property to re-assigned
// from another component, the you need to decorate it with @Input()
    //name: string = 'Tom';

// This method show more details about the employee
  //toggleDetails(): void {
  //    this.showDetails = !this.showDetails;
  //}

    // The employee will set by the values obtained from the observable
    employee: IEmployee;
    statusMessage: string = 'Loading data, please wait...';
    subscription: Subscription;

    // Dependency Injection i.e. Angular will provide instances of the following dependencies at runtime
    constructor(private _employeeService: EmployeeService,
                private _activatedRoute: ActivatedRoute,
                private _router: Router
                )
    {

    }

    // This executed when the back button is clicked. i.e. event binding
    // The Router service does need to registered with angular provider because Angular already know it
    onBackButtonClick(): void {
        this._router.navigate(['/employees']);
    }

    onCancelButtonClick(): void {
        this.statusMessage = "Request Cancelled";
        this.subscription.unsubscribe();
    }

    ngOnInit(){
      // The parameter names must match the provided in the routinhg configuration
        let empCode: string = this._activatedRoute.snapshot.params['code'];

        // Subscribe to the observable
        this.subscription = this._employeeService.getEmployeeByCode(empCode)
            .pipe(retryWhen(error => {
                delay(1000)
                return error.pipe(scan(retryCount => {
                    retryCount += 1;
                    if (retryCount < 6) {
                        this.statusMessage = `Retrying...Attempt # ${retryCount}`;
                        return retryCount;
                    } else {
                        throw (error);
                    }
                }, 0))
            }))
            .subscribe(employeeData => {
                    if (employeeData == null) {
                        this.statusMessage = "Employee with specified employee code does not exist";
                    } else {
                        this.employee = employeeData
                    }
            }, error => {
                this.statusMessage = 'Problem with the service, please try again after sometime';
                console.log(error);
            });
  }

}
