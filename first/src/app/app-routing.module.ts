import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AuthGuard } from './auth.guard';
import { DisplayComponent } from './display/display.component';
import { DisplayleaveComponent } from './displayleave/displayleave.component';
import { LeaveComponent } from './leave/leave.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{path:'display',component:DisplayComponent,data:{roles:["admin","user"]},canActivate:[AuthGuard]},
{path:'add',component:AddComponent,data:{roles:["admin"]},canActivate:[AuthGuard]},
{path:'register',component:RegisterComponent},{path:'login',component:LoginComponent},
{path:'leave',component:LeaveComponent,data:{roles :["user"]},canActivate:[AuthGuard]},
{path:'displayleave',component:DisplayleaveComponent,data:{roles :["admin","user"]},canActivate:[AuthGuard]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
