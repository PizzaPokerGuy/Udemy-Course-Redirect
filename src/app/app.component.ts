import { Component } from '@angular/core';
import { Course } from 'udemy-coupon-redirect';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public courses: Course[] = [
    { courseKey: 'javascript', name: '', urlTitle: 'javascript-360' }
  ];
}
