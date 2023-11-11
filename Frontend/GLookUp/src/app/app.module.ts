import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { MainViewComponent } from './pages/main-view/main-view.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProjectComponent } from './components/project/project.component';
import { StudentViewComponent } from './pages/student-view/student-view.component';
import { ProfileViewComponent } from './pages/profile-view/profile-view.component';
import { LoginViewComponent } from './pages/login-view/login-view.component';
import { SignupViewComponent } from './pages/signup-view/signup-view.component';
import { UserProfileViewComponent } from './pages/user-profile-view/user-profile-view.component';
import { CollaborateViewComponent } from './pages/collaborate-view/collaborate-view.component';
import { RateViewComponent } from './pages/rate-view/rate-view.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginViewComponent,
    BackButtonComponent,
    ProfileViewComponent,
    CustomButtonComponent,
    MainViewComponent,
    ProjectComponent,
    StudentViewComponent,
    ProfileViewComponent,
    LoginViewComponent,
    SignupViewComponent,
    UserProfileViewComponent,
    CollaborateViewComponent,
    RateViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
