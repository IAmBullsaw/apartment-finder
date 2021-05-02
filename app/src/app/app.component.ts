import { Component } from '@angular/core';

import { AuthService } from "@auth0/auth0-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Apartment Finder';
  constructor(public auth: AuthService) {}
}
// TODO(iambullsaw)(2021-05-02): continue https://auth0.com/blog/complete-guide-to-angular-user-authentication/#Retrieving-User-Information