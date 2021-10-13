import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { AddComponent } from './add/add.component';
import { HttpClientModule ,HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { AuthorizationInterceptor } from './authorization.interceptor';
import { LeaveComponent } from './leave/leave.component';
import { DisplayleaveComponent } from './displayleave/displayleave.component';
@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    AddComponent,
    RegisterComponent,
    LoginComponent,
    SpinnerComponent,
    LeaveComponent,
    DisplayleaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthorizationInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
