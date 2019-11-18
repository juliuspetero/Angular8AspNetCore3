import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { EvenHubComponent } from './even-hub.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { EvenHubRoutingModule } from './even-hub-routing.module';
import {AuthenticationService } from './services/authentication.service';
import { EventService } from './services/event.service';
import { AuthenticationGuard } from './guards/authentication.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';

@NgModule({
  // Components are declared once and when the module is imported they are accessed
    declarations: [
        EvenHubComponent,
        RegisterComponent,
        LoginComponent,
        EventsComponent,
        SpecialEventsComponent
    ],

  // All the imported modules have to be registered here
  imports: [
      CommonModule,
      FormsModule,
      HttpClientModule,
      EvenHubRoutingModule
    ],

    // Create the instance of the a service class and inject it in the constructor which needs it
    providers: [
        AuthenticationService,
        EventService,
        AuthenticationGuard,
        // Using interceptors
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptorService,
            // In order to use multiple interceptors if required
            multi: true
        }
    ],

    exports: [
        EvenHubComponent,
        RegisterComponent,
        LoginComponent,
        EventsComponent,
        SpecialEventsComponent,
        EvenHubRoutingModule
    ]
})
export class EventHubModule { }
