import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RedirectService } from 'src/app/services/redirect/redirect.service';

@Component({
  selector: 'app-invalid',
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
