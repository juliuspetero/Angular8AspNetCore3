import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import all the components that need to be routed
import { HomeComponent } from './home/home.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { PageNotFoundComponent } from './others/page-not-found/page-not-found.component';
import { EmployeeComponent } from './employee/employee.component';
import { EvenHubComponent } from './even-hub/even-hub.component';
import { EventHubModule } from './even-hub/event-hub.module';

// More general routes should be at the bottom and more specific route should be at the top
const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },

    {
        path: 'employees',
        component: EmployeeListComponent
    },
    {
        // When this link is clicked it lazy loads the EventHubModule
        path: 'eventHub',
        loadChildren: () => import('./even-hub/event-hub.module').then(m => m.EventHubModule)

       // This lucks realtime error detection
       //loadChildren: './even-hub/event-hub.module#EventHubModule'
    },
    {
        path: 'employees/:code',
        component: EmployeeComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    // For the one that does not match the above
    {
        path: '**',
        component: PageNotFoundComponent
    }
];


@NgModule({
  declarations: [],
  imports: [
      RouterModule.forRoot(appRoutes, { enableTracing: false }),

      // This allows the component of this module to be considered
      EventHubModule
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
