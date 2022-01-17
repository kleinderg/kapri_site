import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommissionsComponent } from './pages/commissions/commissions.component';
import { HomeComponent } from './pages/home/home.component';
import { FailComponent } from './pay-kapri/fail/fail.component';
import { PayKapriComponent } from './pay-kapri/pay-kapri.component';
import { SuccessComponent } from './pay-kapri/success/success.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'commissions', component: CommissionsComponent },
  { path: 'pay-kapri', component: PayKapriComponent },
  { path: 'pay-kapri/success', component: SuccessComponent },
  { path: 'pay-kapri/oop', component: FailComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
