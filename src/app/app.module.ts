import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CommissionsComponent } from './pages/commissions/commissions.component';
import { PayKapriComponent } from './pay-kapri/pay-kapri.component';
import { SuccessComponent } from './pay-kapri/success/success.component';
import { FailComponent } from './pay-kapri/fail/fail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CommissionsComponent,
    PayKapriComponent,
    SuccessComponent,
    FailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
