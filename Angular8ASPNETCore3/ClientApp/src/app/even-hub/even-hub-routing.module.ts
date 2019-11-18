import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { Routes, RouterModule} from '@angular/router';

import { EvenHubComponent } from './even-hub.component';
import { PageNotFoundComponent } from '../others/page-not-found/page-not-found.component';
import { AuthenticationGuard } from './guards/authentication.guard';
 
const evenHubRoutes: Routes = [
    {
        path: '',
        component: EvenHubComponent,
        children: [
            {
                path: 'events',
                component: EventsComponent
            },
            // In case of another module which also needs to loaded
            //{
            //    path: 'balance', loadChildren: () => import(`./balance/balance.module`).then(m => m.BalanceModule)
            //},
            {
                path: 'special',
                component: SpecialEventsComponent,

                // When a user navigate to this routes, the canActivate guuard is executed
                canActivate: [AuthenticationGuard]
            },
            {
                path: 'register',
                component: RegisterComponent
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: '', redirectTo: 'events', pathMatch: 'full'
            }
            //{
            //    path: '**', component: Page404leavesComponent
            //}
        ]
    }
];

@NgModule({
  declarations: [],
    imports: [
        RouterModule.forChild(evenHubRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class EvenHubRoutingModule { }
