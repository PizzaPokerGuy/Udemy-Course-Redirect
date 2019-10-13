import { NgModule } from '@angular/core';
import { UdemyCouponRedirectComponent } from './components/udemy-coupon-redirect/udemy-coupon-redirect.component';
import { RedirectService } from './services/redirect/redirect.service';

@NgModule({
  declarations: [UdemyCouponRedirectComponent],
  imports: [
  ],
  providers: [RedirectService],
  exports: [UdemyCouponRedirectComponent]
})
export class UdemyCouponRedirectModule { }
