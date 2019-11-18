import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { IEvent } from '../models/event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

    events: IEvent[] = [];

  constructor(private eventService: EventService) { }

    ngOnInit() {
        this.eventService.getEvents()
            .subscribe(response => {
                this.events = response;
            },
            error => {
                console.log(error);
            });
    }
}
