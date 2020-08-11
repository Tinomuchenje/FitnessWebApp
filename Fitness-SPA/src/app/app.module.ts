import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { SurveyComponent } from './survey/survey.component';
import { WorkoutGoalComponent } from './workout-goal/workout-goal.component';
import { SexComponent } from './gender/sex.component';
import { AgeComponent } from './age/age.component';
import { WeightComponent } from './weight/weight.component';
import { HeightComponent } from './height/height.component';
import { ActivityLevelComponent } from './activity-level/activity-level.component';
import { FormBarComponent } from './form-bar/form-bar.component';

import { FormDataService } from './data/formData.service';
import { WorkflowService } from './workflow/workflow.service';
import { appRoutes } from './routes';
import { HomeComponent } from './home/home.component';
import { TargetComponent } from './target/target.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SafeurlPipe } from './safeurl.pipe';

@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      SurveyComponent,
      WorkoutGoalComponent,
      SexComponent,
      AgeComponent,
      WeightComponent,
      HeightComponent,
      ActivityLevelComponent,
      FormBarComponent,
      HomeComponent,
      TargetComponent,
      SafeurlPipe
   ],
   imports: [
      BrowserModule,
      FormsModule,
      RouterModule.forRoot(appRoutes),
      ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
   ],
   providers: [
      FormDataService,
      WorkflowService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
