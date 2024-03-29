import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { Page404Component } from './pages/404/404.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { Page1Component } from './pages/page1/page1.component';
import { AppLayoutComponent } from './components/layouts/app-layout/app-layout.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'home' },

  // no layout
  {
    path: '',
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },

  // app layout
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'user-profile', component: UserProfileComponent },
      { path: 'home', component: HomeComponent },
      { path: 'page1', component: Page1Component },
      { path: 'contact', component: ContactComponent }
    ]
  },

  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
