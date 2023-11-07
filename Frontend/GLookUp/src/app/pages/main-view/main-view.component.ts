import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent {
  title = 'GLookUp';

  constructor(private router: Router) {}

  navigateTo() {
    console.log("route-to: LogIn page")
    this.router.navigate(['/login']).catch(error => {
      console.error('Navigation error:', error);
    });
  }
}
