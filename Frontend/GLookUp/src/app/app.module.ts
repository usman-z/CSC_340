import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { MainViewComponent } from './pages/main-view/main-view.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProjectComponent } from './components/project/project.component';
import { StudentViewComponent } from './pages/student-view/student-view.component';
import { AdminViewComponent } from './pages/admin-view/admin-view.component';
import { ProfileViewComponent } from './pages/profile-view/profile-view.component';
import { LoginViewComponent } from './pages/login-view/login-view.component';
import { SignupViewComponent } from './pages/signup-view/signup-view.component';
import { UserProfileViewComponent } from './pages/user-profile-view/user-profile-view.component';
import { CollaborateViewComponent } from './pages/collaborate-view/collaborate-view.component';
import { RateViewComponent } from './pages/rate-view/rate-view.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { ApproveViewComponent } from './pages/approve-view/approve-view.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ListViewComponent } from './pages/list-view/list-view.component';
import { ListComponent } from './components/list/list.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    BackButtonComponent,
    ProfileViewComponent,
    CustomButtonComponent,
    MainViewComponent,
    ProjectComponent,
    StudentViewComponent,
    AdminViewComponent,
    ProfileViewComponent,
    LoginViewComponent,
    SignupViewComponent,
    UserProfileViewComponent,
    CollaborateViewComponent,
    RateViewComponent,
    StarRatingComponent,
    ApproveViewComponent,
    FeedbackComponent,
    ListViewComponent,
    ListComponent,
    NotificationsComponent,
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
