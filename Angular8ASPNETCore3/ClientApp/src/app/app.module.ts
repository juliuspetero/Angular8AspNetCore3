import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
//import { UserPreferencesService } from './employee/services/user-preferences.service';
import { AppTestModule } from './app-test.module';


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

    // You do not need to add the module from apptest in the providers for dependency injection
    AppTestModule
  ],
  // Register the service at this level and children with angular dependency injector
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
