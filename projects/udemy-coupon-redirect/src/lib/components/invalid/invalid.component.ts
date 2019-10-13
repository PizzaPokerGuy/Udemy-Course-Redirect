import { Component, OnInit } from '@angular/core';
import { RedirectService } from 'projects/udemy-coupon-redirect/src/lib/services/redirect/redirect.service';

@Component({
  selector: 'lib-invalid',
  templateUrl: './invalid.component.html',
  styleUrls: ['./invalid.component.scss']
})
export class InvalidComponent implements OnInit {
  public ticker = '.';

  constructor(private redirectService: RedirectService) { }

  public ngOnInit() {
    setInterval(() => {
      this.updateTicker();
    }, 500);
    this.redirectService.redirectIfValidCourse();
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

}
