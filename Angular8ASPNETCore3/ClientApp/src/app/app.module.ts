import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { enableProdMode } from '@angular/core';


// Use for making Http request to Rest APIs
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeTitlePipe } from './employee/employee-list/employee-title.pipe';
import { EmployeeCountComponent } from './employee/employee-list/employee-count/employee-count.component';
import { SimpleComponent } from './others/simple/simple.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './others/page-not-found/page-not-found.component';

import { AppRoutingModule } from './app-routing.module';
// Register employee service globally via dependency injection
import { EmployeeService } from './employee/services/employee.service';
import { EventHubModule } from './even-hub/event-hub.module';
import { environment } from '../environments/environment';

// To enable production mode
if (environment.production) {
    enableProdMode();
}


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmployeeTitlePipe,
    EmployeeCountComponent,
    SimpleComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    EventHubModule
  ],
  // Register the service at this level and children with angular dependency injector
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
