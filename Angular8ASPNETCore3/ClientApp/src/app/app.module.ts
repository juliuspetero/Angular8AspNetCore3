import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes } from '@angular/router';

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

// More general routes should be at the bottom and more specific route should be at the top
const appRoutes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'employees', component: EmployeeListComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: '**', component: PageNotFoundComponent}
];

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
      RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
