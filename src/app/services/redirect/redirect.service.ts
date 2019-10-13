import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/models/enums/course.enum';

@Injectable()
export class RedirectService {
  constructor(private route: ActivatedRoute) { }

  public redirectIfValidCourse(): void {
    const course = this.route.snapshot.queryParams.course;
    const couponCode = this.getCurrentMonthsCode();

    switch (course) {
      case Course.JavaScript:
        this.redirectByCourse('javascript-360', couponCode);
        break;
      case Course.FrontEndInterview:
        this.redirectByCourse('100-front-end-interview-questions-challenge', couponCode);
        break;
      case Course.Algorithms:
        this.redirectByCourse('100-algorithms-challenge', couponCode);
        break;
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
