import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import ng form
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives hereimport { UserAccountComponent } from './user-account/user-account.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { UserAccountComponent } from './components/user-account/user-account.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlanesComponent } from './components/planes/planes.component';
import { HttpClientModule } from '@angular/common/http';
import { NewUserComponent } from './components/new-user/new-user.component';
 
import { DevicesTableComponent } from './components/devices-table/devices-table.component';
import { CreateLinesComponent } from './components/create-lines/create-lines.component';

@NgModule({
  declarations: [
    AppComponent,
    UserAccountComponent,
    LoginPageComponent,
    PlanesComponent,
    NewUserComponent,
    DevicesTableComponent,
    CreateLinesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

