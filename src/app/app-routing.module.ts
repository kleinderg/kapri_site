import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommissionsComponent } from './pages/commissions/commissions.component';
import { HomeComponent } from './pages/home/home.component';
import { PayKapriComponent } from './pay-kapri/pay-kapri.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'commissions', component: CommissionsComponent },
  { path: 'pay-kapri', component: PayKapriComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
