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

import {
   NgbAuthFirebaseUIModule,
   NgBootstrapAuthFirebaseUIConfigToken,
   AuthProcessService,
   AlertService,
   FirestoreSyncService
} from '@firebaseui/ng-bootstrap';

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
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

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
      LoginComponent,
      SignUpComponent,
   ],
   imports: [
      BrowserModule,
      FormsModule,
      AngularFireAuthModule,
      AngularFireStorageModule,
      RouterModule.forRoot(appRoutes),
      ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
      AngularFireModule,
      NgbAuthFirebaseUIModule,
   ],
   providers: [
      FormDataService,
      WorkflowService,
      AngularFirestore,
      AuthProcessService,
      AlertService,
      FirestoreSyncService,
      { provide: FirebaseOptionsToken, useValue: environment.firebase },
      { provide: NgBootstrapAuthFirebaseUIConfigToken, useValue: environment.firebase }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
