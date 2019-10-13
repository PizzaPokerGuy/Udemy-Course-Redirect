import { NgModule } from '@angular/core';
import { InvalidComponent } from './components/invalid/invalid.component';
import { RedirectService } from './services/redirect/redirect.service';



@NgModule({
  declarations: [InvalidComponent],
  imports: [
  ],
  providers: [RedirectService],
  exports: [InvalidComponent]
})
export class UdemyCouponRedirectModule { }
