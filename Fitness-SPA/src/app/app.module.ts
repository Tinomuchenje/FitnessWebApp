import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SafeurlPipe } from './safeurl.pipe';

import { AngularFireModule, FirebaseOptionsToken } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestoreModule } from '@angular/fire/firestore';

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
import { PaymentComponent } from './payment/payment.component';

import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { AuthService } from './shared/services/auth.service';
import { ProfileComponent } from './profile/profile.component';
import { ProgramComponent } from './program/program.component';
import { WorkoutComponent } from './workout/workout.component';
import { ProgressTrackerComponent } from './progress-tracker/progress-tracker.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
      SafeurlPipe,
      PaymentComponent,
      SignUpComponent,
      SignUpComponent,
      ForgotPasswordComponent,
      SignInComponent,
      VerifyEmailComponent,
      ProfileComponent,
      ProgramComponent,
      WorkoutComponent,
      ProgressTrackerComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      AngularFireAuthModule,
      AngularFireStorageModule,
      RouterModule.forRoot(appRoutes),
      ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
      AngularFireModule,
      AngularFirestoreModule,
      NgbModule,
   ],
   providers: [
      FormDataService,
      WorkflowService,
      AngularFirestore,
      AuthService,
      { provide: FirebaseOptionsToken, useValue: environment.firebase },
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
