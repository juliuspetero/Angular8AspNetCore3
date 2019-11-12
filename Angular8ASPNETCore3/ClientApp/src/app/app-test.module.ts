import { NgModule } from '@angular/core';

// Import a module for dependency injection
import { UserPreferencesService } from './employee/services/user-preferences.service';

@NgModule({
    // The dependency is registered in this test module. The test module then register it in the app module
    providers: [UserPreferencesService]
})
export class AppTestModule { }
