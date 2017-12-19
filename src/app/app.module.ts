import { AfterLoginGuard } from './dev/guards/after-login.guard';
import { AuthGuard } from './dev/guards/auth.guard';
import { MyMaterialModule } from './dev/my-material.module';
import { SidebarComponent } from './dev/sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
// Module
import { AppRoutingModule } from './app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PetModule } from './dev/pet/pet.module';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
// Services
import { AuthService } from './dev/services/auth.service';
// Components
import { SignUpComponent } from './dev/user/sign-up/sign-up.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './dev/user/login/login.component';
import { HospitalComponent} from './dev/hospital/hospital.component';
import { UserProfileComponent } from './dev/user/user-profile/user-profile.component';
import { SignInComponent } from './dev/user/sign-in/sign-in.component';
import { PetStateComponent } from './dev/pet-state/pet-state.component';
import { Auth1Service } from './dev/services/auth1.service';
import { ProfileComponent } from './dev/user/profile/profile.component';
import { ImgUploaderComponent } from './dev/img-uploader/img-uploader.component';
import { DashboardComponent } from './dev/dashboard/dashboard.component';
import { MedicalComponent } from './dev/medical-info/medical/medical.component';
import { VaccinationComponent } from './dev/medical-info/vaccination/vaccination.component';
import { EditVaccinationComponent } from './dev/medical-info/edit-vaccination/edit-vaccination.component';

@NgModule({
  declarations: [
    AppComponent,
    HospitalComponent,
    LoginComponent,
    UserProfileComponent,
    SignInComponent,
    SignUpComponent,
    PetStateComponent,
    ProfileComponent,
    ImgUploaderComponent,
    SidebarComponent,
    DashboardComponent,
    MedicalComponent,
    VaccinationComponent,
    EditVaccinationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    Angular2FontawesomeModule,
    NoopAnimationsModule,
    MyMaterialModule,
    PetModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
  ],
  providers: [
    AuthService,
    Auth1Service,
    AuthGuard,
    AfterLoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
