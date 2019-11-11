import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.css']
})
export class EmployeeCountComponent implements OnInit {
    selectedRadioButtonValue: string = "All";

    // This is the output event that the container listens for
    @Output()
    countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

    // This method raises the event and passes the event payload
    onRadioButtonSelectionChange() {
        this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
        //console.log(this.selectedRadioButtonValue);
    }

    @Input()
    all: number;

    @Input()
    male: number;

    @Input()
    female: number;

  constructor() { }

  ngOnInit() {  
  }

}
