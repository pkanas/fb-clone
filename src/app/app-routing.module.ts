import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacebookGuard } from './guards/facebook.guard';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  {path: '',
  component: HomeComponent,
  canActivate: [FacebookGuard]},
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
