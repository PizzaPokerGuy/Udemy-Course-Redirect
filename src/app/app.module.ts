import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UdemyCouponRedirectModule, RedirectService } from 'udemy-coupon-redirect';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    UdemyCouponRedirectModule
  ],
  providers: [RedirectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
