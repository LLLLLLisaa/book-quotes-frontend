import { Routes } from '@angular/router';

import { LoginComponent } from '@/pages/login/login.component';
import { RegisterComponent } from '@/pages/register/register.component';
import { HomeComponent } from '@/pages/home/home.component';
import { BookFormComponent } from '@/pages/book-form/book-form.component';
import { QuotesComponent } from '@/pages/quotes/quotes.component';
import { QuoteFormComponent } from '@/pages/quote-form/quote-form.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'books/add',
    component: BookFormComponent
  },
  {
    path: 'books/edit/:id',
    component: BookFormComponent
  },
  {
    path: 'quotes',
    component: QuotesComponent
  },
  {
    path: 'quotes/add',
    component: QuoteFormComponent
  },
  {
    path: 'quotes/edit/:id',
    component: QuoteFormComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
