import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}    from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { MedicalStaffing} from '../medical-staffing/staffing.component';
import { Home} from '../home/home.component';
import { Aboutus} from '../about-us/aboutus.component';
import { Clients} from '../clients/clients.component';
import { Contact} from '../contact/contact.component';
import { Jobs} from '../jobs/jobs.component';
import { Jobseekers} from '../jobseekers/jobseekers.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {FileUploadModule} from 'primeng/fileupload';
import {InputMaskModule} from 'primeng/inputmask';
import { ScheduleComponent } from './schedule/schedule.component';
import {ScheduleModule} from 'primeng/schedule';
import {DialogModule} from 'primeng/dialog';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {SliderModule} from 'primeng/slider';
import {TableModule} from 'primeng/table';
import {MessageModule} from 'primeng/message';
import {KeyFilterModule} from 'primeng/keyfilter';
import {LoginComponent} from './login/login.component';
import { UserRegisterationComponent } from './user-registeration/user-registeration.component';
import { OktaCallbackComponent, OktaAuthModule,OktaAuthGuard } from '@okta/okta-angular';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth-interceptor';
import { HttpClientModule} from "@angular/common/http";
import { AvailabilityComponent } from './availability/availability.component';
import { CalendarModule as AngularCalendar  } from 'angular-calendar';
import { ShiftsComponent } from './shifts/shifts.component';
import { ShiftDetailsComponent } from './shift-details/shift-details.component';
import { HideIfUnauthorizedDirective } from './authorization/hide-if-unauthorized.directive';
import { AuthService } from './auth/auth.service';
import { EnterAvailabilityRoutingModule } from './enter-availability/enter-availability-routing.module';
import {ProgressBarModule} from 'primeng/progressbar';
import {BlockUIModule} from 'primeng/blockui';
import {environment} from './../environments/environment';
import {ToastModule} from 'primeng/toast';
import { UserAvailabilityComponent } from './user-availability/user-availability.component';
import {ToolbarModule} from 'primeng/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import {CardModule} from 'primeng/card';
import {AccordionModule} from 'primeng/accordion';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { DisableDirective } from './common-services/disable.directive';
import {MultiSelectModule} from 'primeng/multiselect';


const routes: Routes=[
                      {path:'',redirectTo: '/home', pathMatch: 'full'},
                      {path:'home',component:Home},
                      {path:'medicalstaffing',component:MedicalStaffing},
                      {path:'aboutus',component:Aboutus},
                      {path:'clients',component:Clients},
                      {path:'contact',component:Contact},
                      {path:'jobs',component:Jobs},
                      {path:'jobseekers',component:UserRegisterationComponent},
                      {path:'login',component:LoginComponent},
                      {path:'schedule',component:ScheduleComponent,canActivate: [ OktaAuthGuard ]},
                      {path:'register',component:UserRegisterationComponent},
                      {path: 'implicit/callback',    component: OktaCallbackComponent},
                      {path: 'myavailability',    component: AvailabilityComponent, canActivate: [ OktaAuthGuard]},
                      {path: 'myshifts',    component: ShiftsComponent, canActivate: [ OktaAuthGuard]},
                      {path: 'myshifts/shiftdetails', component: ShiftDetailsComponent},
                      {path: 'useravailability', component: UserAvailabilityComponent, canActivate: [ OktaAuthGuard]},
                      {path: 'myprofile', component: MyProfileComponent, canActivate: [ OktaAuthGuard]}                     
                     ];
                       
 const config = {
  				issuer: 'https://dev-581945.oktapreview.com/oauth2/default',
 				redirectUri: 'http://'+environment.host+':'+environment.port+'/implicit/callback',
  				clientId: '0oafuhs95vCjTXe6f0h7',
                scope:'openid profile'
				};

@NgModule({
  declarations: [
    AppComponent,
    Home,
    MedicalStaffing,
    Aboutus,
    Clients,
    Contact,
    Jobs,
    Jobseekers,
    ScheduleComponent,
    LoginComponent,
    UserRegisterationComponent,
    AvailabilityComponent,
    ShiftsComponent,
    ShiftDetailsComponent,
    HideIfUnauthorizedDirective,
    UserAvailabilityComponent,
    SignUpComponent,
    MyProfileComponent,
    EmployeeProfileComponent,
    DisableDirective,
        
  ],
  imports: [
  
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    CommonModule,
    FormsModule,
    TableModule,
    InputTextModule,
    InputTextareaModule,
    DialogModule,
    ToastModule,
    DropdownModule,
    SliderModule,
    CardModule,
    AccordionModule,
    RadioButtonModule,
    CheckboxModule,
    AutoCompleteModule,
    FileUploadModule,
    InputMaskModule,
    ScheduleModule,
    CalendarModule,
    HttpClientModule,
    ProgressBarModule,
    BlockUIModule,
    ToolbarModule,
    ReactiveFormsModule,
    MessageModule,
    KeyFilterModule,
    CardModule,
    MultiSelectModule,
    EnterAvailabilityRoutingModule,
    RouterModule.forRoot(routes),
    OktaAuthModule.initAuth(config),
    AngularCalendar.forRoot(),
    
  ],
  providers: [AuthService,{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
