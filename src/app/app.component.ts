import { Component } from '@angular/core';
import { Course } from 'projects/udemy-coupon-redirect/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public courses: Course[] = [
    { courseKey: 'javascript', urlTitle: 'javascript-360' }
  ];
}
