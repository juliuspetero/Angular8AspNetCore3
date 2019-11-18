import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-even-hub',
  templateUrl: './even-hub.component.html',
  styleUrls: ['./even-hub.component.css']
})
export class EvenHubComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

    ngOnInit() {
  }

}
