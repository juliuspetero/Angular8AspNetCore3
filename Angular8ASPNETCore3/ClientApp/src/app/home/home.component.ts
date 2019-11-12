import { Component, OnInit } from '@angular/core';
import { UserPreferencesService } from '../employee/services/user-preferences.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private _userPreferencesService: UserPreferencesService) {
    }

    // This is getter for the color to access the private field above
    get color(): string {
        return this._userPreferencesService.colorPreference;
    }

    // Set the private property 
    set color(value: string){
        this._userPreferencesService.colorPreference = value;
    }

  ngOnInit() {
  }

}
