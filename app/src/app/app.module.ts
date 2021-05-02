import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from "../environments/environment";
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { SignupButtonComponent } from './components/signup-button/signup-button.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { AuthenticationButtonComponent } from './components/authentication-button/authentication-button.component';
import { AuthNavComponent } from './components/auth-nav/auth-nav.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginButtonComponent,
    SignupButtonComponent,
    LogoutButtonComponent,
    AuthenticationButtonComponent,
    AuthNavComponent,
    NavBarComponent,
    MainNavComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({...env.auth,}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// TODO(iambullsaw)(2021-05-02): following auth0 guide, at step: https://auth0.com/blog/complete-guide-to-angular-user-authentication/#Add-User-Authentication