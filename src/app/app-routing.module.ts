import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Route[] = [
  {path:'', redirectTo:'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', loadChildren: () => import('src/app/charts/charts.module').then(m => m.ChartsModule) },
    ]
  }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
