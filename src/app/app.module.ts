import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UdemyCouponRedirectModule } from 'udemy-coupon-redirect';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    UdemyCouponRedirectModule,
    RouterModule.forRoot([], {})
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
