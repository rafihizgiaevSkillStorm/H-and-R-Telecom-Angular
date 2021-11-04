import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateLinesComponent } from './components/create-lines/create-lines.component';
import { DevicesTableComponent } from './components/devices-table/devices-table.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { PlanesComponent } from './components/planes/planes.component';


import { UserAccountComponent } from './components/user-account/user-account.component';

const routes: Routes = [
  {path: '', redirectTo: '/user-account', pathMatch: 'full' },
  {path:"user-account",component:UserAccountComponent},
  {path:"new-user",component:NewUserComponent},
  {path:"login-form",component:LoginPageComponent},
  {path:"plans",component:PlanesComponent},
  {path: "all-devices", component: DevicesTableComponent },
  {path: "createLines", component: CreateLinesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
