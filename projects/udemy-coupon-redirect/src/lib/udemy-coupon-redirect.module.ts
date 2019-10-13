import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { UdemyCouponRedirectComponent } from './components/udemy-coupon-redirect/udemy-coupon-redirect.component';

@NgModule({
  declarations: [UdemyCouponRedirectComponent],
  imports: [
  ],
  entryComponents: [UdemyCouponRedirectComponent],
  providers: [],
  exports: [UdemyCouponRedirectComponent],
})
export class UdemyCouponRedirectModule {
  constructor(injector: Injector) {
    const udemyRedirect = createCustomElement(UdemyCouponRedirectComponent, { injector });
    customElements.define('lib-udemy-coupon-redirect', udemyRedirect);
  }

}
