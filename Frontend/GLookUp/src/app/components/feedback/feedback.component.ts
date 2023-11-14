import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {

  message: string = '';
  response: string = '';
  loggedIn: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}
  
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.response = params['response'];
      this.loggedIn = params['loggedIn'];

      if (this.response == 'success') {
        this.message = 'Success!'
      }
      else {
        this.message = 'Failed!'
      }
    });
  }
  
  goHome() {
    if (this.loggedIn == 'Admin') {
      this.router.navigate(['/adminView'], {
        queryParams: { loggedIn: this.loggedIn }
      }).catch(error => {
        console.error('Navigation error:', error);
      });
    }
    else {
      this.router.navigate(['/studentView'], {
        queryParams: { loggedIn: this.loggedIn }
      }).catch(error => {
        console.error('Navigation error:', error);
      });
    }
  }
}
