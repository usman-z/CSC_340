import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginPageComponent,
    QuestionnaireComponent,
    BackButtonComponent,
    ProfileComponent,
    CustomButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
