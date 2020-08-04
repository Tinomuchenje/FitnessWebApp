import { Routes } from '@angular/router';
import { SexComponent } from './sex/sex.component';
import { AgeComponent } from './age/age.component';
import { WeightComponent } from './weight/weight.component';
import { HeightComponent } from './height/height.component';
import { ActivityLevelComponent } from './activity-level/activity-level.component';

export const appRoutes: Routes = [
    { path: 'sex', component: SexComponent },
    { path: 'age', component: AgeComponent },
    { path: 'weight', component: WeightComponent },
    { path: 'height', component: HeightComponent },
    { path: 'activity', component: ActivityLevelComponent },
    { path: '**', redirectTo: 'sex', pathMatch: 'full'}
];
