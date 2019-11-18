import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IEvent } from '../models/event';
import { EventService } from '../services/event.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {
    specialEvents: IEvent[] = [];

    constructor(private eventService: EventService,
                private router: Router) { }

    // This life cycle hook is called immediately after the class is initialized
    ngOnInit() {
        this.eventService.getSpecialEvents()
            .subscribe(response => {
                this.specialEvents = response;
            },
            error => { 
                if (error instanceof HttpErrorResponse && error.status == 401) {
                    this.router.navigate(['/eventHub/login']);
                } else {
                    // In case of any other errors
                    console.log(error);
                }
            });
    }
}
