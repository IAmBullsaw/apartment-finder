import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent
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