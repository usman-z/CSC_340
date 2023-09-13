import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GLookUp';

  constructor(private router: Router) {}

  navigateTo() {
    console.log("Called")
    this.router.navigate(['/login']).catch(error => {
      console.error('Navigation error:', error);
    });
  }
}
