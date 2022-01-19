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
import { PaymentHelperService } from './pay-kapri/service/payment-helper.service';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireFunctionsModule } from '@angular/fire/compat/functions';

const firebaseConfig = {
  apiKey: "AIzaSyDlJt3zyyo3bd55oiAEi_j90HWvdDbAG0Y",
  authDomain: "kaprihorn.firebaseapp.com",
  projectId: "kaprihorn",
  storageBucket: "kaprihorn.appspot.com",
  messagingSenderId: "1066698926832",
  appId: "1:1066698926832:web:764e92e64d8bdffcd5b035",
  measurementId: "G-S0TH8HDLE4"
};

const app = initializeApp(firebaseConfig); 

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
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)), // this and below were created by the cli tool
    provideFunctions(() => getFunctions()),
    AngularFireModule.initializeApp(environment.firebase), // these were added by following docs
    AngularFireFunctionsModule
  ],
  providers: [PaymentHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
