import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { RedirectService } from './services/redirect/redirect.service';
import { InvalidComponent } from './views/invalid/invalid.component';

@NgModule({
  declarations: [
    AppComponent,
    InvalidComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES, {}),
  ],
  providers: [RedirectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
