import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  firstName: string = 'Tom';
  lastName: string = 'Hopkins';
  gender: string = 'Male';
  age: number = 20;  
  showDetails: boolean = false;

// ngModel can change this property but if need the property to re-assigned
// from another component, the you need to decorate it with @Input()
  name: string = 'Tom';

  toggleDetails(): void {
      this.showDetails = !this.showDetails;
  }

  constructor() { }

  ngOnInit() {
  }

}
