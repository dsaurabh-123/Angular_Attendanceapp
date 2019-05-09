import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TodayComponent } from './today/today.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const route:Routes=[
 {path:'dashboard', component:DashboardComponent},
 {path:'today', component:TodayComponent},
 {path:'home', component:HomeComponent}
// {path:'**', component:PagenotfoundComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(route) ],
})
export class AppRoutingModule {}