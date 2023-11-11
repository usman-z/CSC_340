import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainViewComponent } from './pages/main-view/main-view.component';
import { StudentViewComponent } from './pages/student-view/student-view.component';
import { LoginViewComponent } from './pages/login-view/login-view.component';
import { ProfileViewComponent } from './pages/profile-view/profile-view.component';
import { SignupViewComponent } from './pages/signup-view/signup-view.component';
import { UserProfileViewComponent } from './pages/user-profile-view/user-profile-view.component';

const routes: Routes = [
  { path: '', component: MainViewComponent },
  { path: 'login', component: LoginViewComponent },
  { path: 'signup', component: SignupViewComponent },
  { path: 'profile', component: ProfileViewComponent },
  { path: 'studentView', component: StudentViewComponent },
  { path: 'user', component: UserProfileViewComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
