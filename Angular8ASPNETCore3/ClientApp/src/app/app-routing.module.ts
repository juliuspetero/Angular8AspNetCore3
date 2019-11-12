import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import all the components that need to be routed
import { HomeComponent } from './home/home.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { PageNotFoundComponent } from './others/page-not-found/page-not-found.component';
import { EmployeeComponent } from './employee/employee.component';

// More general routes should be at the bottom and more specific route should be at the top
const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'employees', component: EmployeeListComponent },
    { path: 'employees/:code', component: EmployeeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [],
  imports: [
      RouterModule.forRoot(appRoutes),
    ],
    exports: [
      RouterModule
    ]
})
export class AppRoutingModule { }
