import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommissionsComponent } from './pages/commissions/commissions.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'commissions', component: CommissionsComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
