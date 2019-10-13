import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../models/course.model';

@Component({
  selector: 'lib-invalid',
  templateUrl: './udemy-coupon-redirect.component.html',
  styleUrls: ['./udemy-coupon-redirect.scss']
})
export class UdemyCouponRedirectComponent implements OnInit {
  @Input() public courses: Course[];
  public ticker = '.';

  constructor(private route: ActivatedRoute) { }

  public ngOnInit() {
    setInterval(() => {
      this.updateTicker();
    }, 500);

    this.redirectIfValidCourse();
  }

  private updateTicker() {
    switch (this.ticker.length) {
      case 1:
        this.ticker = '..';
        break;

      case 2:
        this.ticker = '...';
        break;

      case 3:
        this.ticker = '.';
        break;
    }
  }

  public redirectIfValidCourse(): void {
    const courseQueryString = this.route.snapshot.queryParams.course;
    const couponCode = this.getCurrentMonthsCode();

    for (const course of this.courses) {
      if (course.courseKey === courseQueryString) {
        this.redirectByCourse(course.urlTitle, couponCode);
        break;
      }
    }
  }

  private getCurrentMonthsCode(): string {
    const todaysDate = new Date();
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const todaysMonth = months[todaysDate.getMonth()];
    const todaysYear = todaysDate.getUTCFullYear();

    return `${todaysMonth}${todaysYear}`;
  }

  private redirectByCourse(courseName: string, couponCode: string) {
    const base = 'https://www.udemy.com/course';
    const fullUrl = `${base}/${courseName}/?couponCode=${couponCode}`;
    window.location.href = fullUrl;
  }
}
