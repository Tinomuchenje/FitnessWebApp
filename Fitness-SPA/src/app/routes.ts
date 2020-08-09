import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { SexComponent } from './gender/sex.component';
import { AgeComponent } from './age/age.component';
import { WeightComponent } from './weight/weight.component';
import { HeightComponent } from './height/height.component';
import { ActivityLevelComponent } from './activity-level/activity-level.component';
import { WorkoutGoalComponent } from './workout-goal/workout-goal.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent,
     children: [
        { path: 'sex', component: SexComponent },
        { path: 'age', component: AgeComponent },
        { path: 'weight', component: WeightComponent },
        { path: 'height', component: HeightComponent },
        { path: 'activity', component: ActivityLevelComponent },
         { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ] },
    { path: 'goal', component: WorkoutGoalComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full'}
];
