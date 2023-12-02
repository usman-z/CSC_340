import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainViewComponent } from './pages/main-view/main-view.component';
import { StudentViewComponent } from './pages/student-view/student-view.component';
import { LoginViewComponent } from './pages/login-view/login-view.component';
import { ProfileViewComponent } from './pages/profile-view/profile-view.component';
import { SignupViewComponent } from './pages/signup-view/signup-view.component';
import { UserProfileViewComponent } from './pages/user-profile-view/user-profile-view.component';
import { CollaborateViewComponent } from './pages/collaborate-view/collaborate-view.component';
import { RateViewComponent } from './pages/rate-view/rate-view.component';
import { AdminViewComponent } from './pages/admin-view/admin-view.component';
import { ApproveViewComponent } from './pages/approve-view/approve-view.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ListViewComponent } from './pages/list-view/list-view.component';

const routes: Routes = [
  { path: '', component: MainViewComponent },
  { path: 'login', component: LoginViewComponent },
  { path: 'signup', component: SignupViewComponent },
  { path: 'profile', component: ProfileViewComponent },
  { path: 'studentView', component: StudentViewComponent },
  { path: 'adminView', component: AdminViewComponent},
  { path: 'rate', component: RateViewComponent },
  { path: 'collaborate', component: CollaborateViewComponent },
  { path: 'user', component: UserProfileViewComponent },
  { path: 'approve', component: ApproveViewComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'search', component: ListViewComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
