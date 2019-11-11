import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../interfaces/employee';
import { EmployeeService} from '../services/employee.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css'],
    // Register the service at this level and children with angular dependency injection system
  providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit {
    employees: IEmployee[];

    selectedEmployeeCountRadioButton: string = "All";

    // Status message with its default value
    statusMessage: string = "Loading data, please wait...";

    // Dependency injection in TypeScript
    constructor(private _employeeService: EmployeeService) {
        
    }

    ngOnInit() {
        // The callback function receives data from the observable
        this._employeeService.getEmployees()
            // Populate the employees with data receive from the obervable
            .subscribe(employeeData => this.employees = employeeData,

              // Handle the error which may ocurr during the http request
             (error: Response) => {
                 console.error(error);
                 this.statusMessage = 'Problem with the service, please try again after sometime';
             });
    }
    
    // This method is called by the refresh button im the HTML
    //getEmployees():void {
    //    this.employees = [
    //        { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '6/25/1988' },
    //        { code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 5800, dateOfBirth: '9/6/1982' },
    //        { code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 9500, dateOfBirth: '5/18/1979' },
    //        { code: 'emp104', name: 'Mary', gender: 'Female', annualSalary: 3500, dateOfBirth: '4/12/1980' },
    //        { code: 'emp105', name: 'Nancy', gender: 'Female', annualSalary: 4500, dateOfBirth: '10/18/1984' }
    //    ];
    //}

    trackByEmpCode(index: number, employee: any): string {
        return employee.code;
    }

    getTotalEmployeesCount(): number {
        return this.employees.length;
    }

    getTotalMaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === "Male").length;
    }

    getTotalFemaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === "Female").length;
    }

    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }
}
