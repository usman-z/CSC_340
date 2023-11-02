import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MainViewComponent } from './pages/main-view/main-view.component';

const routes: Routes = [
  { path: '', component: MainViewComponent },
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
