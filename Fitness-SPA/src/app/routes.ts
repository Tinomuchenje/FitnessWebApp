import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { SexComponent } from './gender/sex.component';
import { AgeComponent } from './age/age.component';
import { WeightComponent } from './weight/weight.component';
import { HeightComponent } from './height/height.component';
import { ActivityLevelComponent } from './activity-level/activity-level.component';
import { WorkoutGoalComponent } from './workout-goal/workout-goal.component';
import { TargetComponent } from './target/target.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { ProgramComponent } from './program/program.component';
import { ProgressTrackerComponent } from './progress-tracker/progress-tracker.component';
import { WorkoutComponent } from './workout/workout.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent,
     children: [
        { path: 'sex', component: SexComponent },
        { path: 'age', component: AgeComponent },
        { path: 'weight', component: WeightComponent },
        { path: 'height', component: HeightComponent },
        { path: 'activity', component: ActivityLevelComponent },
        { path: 'goal', component: TargetComponent },
        { path: '**', redirectTo: 'sex', pathMatch: 'full' }
    ] },
    { path: 'course', component: WorkoutGoalComponent },
    { path: 'sign-in', component: SignInComponent },
    { path: 'sign-up', component: SignUpComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'program', component: ProgramComponent },
    { path: 'workout', component: WorkoutComponent },
    { path: 'tracker', component: ProgressTrackerComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full'}
];
