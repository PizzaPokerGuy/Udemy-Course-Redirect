import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { UdemyCouponRedirectModule } from 'projects/udemy-coupon-redirect/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    UdemyCouponRedirectModule,
    RouterModule.forRoot([{
      component: AppComponent,
      path: '',
    }], {})
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
