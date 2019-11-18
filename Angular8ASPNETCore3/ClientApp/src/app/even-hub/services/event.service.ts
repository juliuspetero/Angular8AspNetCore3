import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEvent } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

    private eventsUrl = 'http://localhost:3000/api/events';
    private specialEventsUrl = 'http://localhost:3000/api/special';

    // HttpClient is injected at runtime
    constructor(private http: HttpClient) { }

    // Get all regular events
    getEvents(): Observable<IEvent[]> {
        return this.http.get<IEvent[]>(this.eventsUrl);
    }

    // Get all events
    getSpecialEvents(): Observable<IEvent[]> {
        return this.http.get<IEvent[]>(this.specialEventsUrl);
    }
}
