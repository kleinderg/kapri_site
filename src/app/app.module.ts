import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CommissionsComponent } from './pages/commissions/commissions.component';
import { PayKapriComponent } from './pay-kapri/pay-kapri.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CommissionsComponent,
    PayKapriComponent
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
