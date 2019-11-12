import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserPreferencesService {
    colorPreference: string = 'orange';

    constructor() {
        console.log("New instance of service created");
    }
}
