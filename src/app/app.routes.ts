import { Routes } from '@angular/router';

import { LoginComponent } from '@/pages/login/login.component';
import { RegisterComponent } from '@/pages/register/register.component';
import { HomeComponent } from '@/pages/home/home.component';
import { BookFormComponent } from '@/pages/book-form/book-form.component';
import { QuotesComponent } from '@/pages/quotes/quotes.component';
import { QuoteFormComponent } from '@/pages/quote-form/quote-form.component';

export const ROUTES = {
  login: 'login',
  register: 'register',
  home: 'books',
  bookAdd: 'books/add',
  bookEdit: 'books/edit/:id',
  quotes: 'quotes',
  quoteAdd: 'quotes/add',
  quoteEdit: 'quotes/edit/:id'
} as const;

export const routes: Routes = [
  {
    path: '',
    redirectTo: ROUTES.login,
    pathMatch: 'full'
  },
  {
    path: ROUTES.login,
    component: LoginComponent
  },
  {
    path: ROUTES.register,
    component: RegisterComponent
  },
  {
    path: ROUTES.home,
    component: HomeComponent
  },
  {
    path: ROUTES.bookAdd,
    component: BookFormComponent
  },
  {
    path: ROUTES.bookEdit,
    component: BookFormComponent
  },
  {
    path: ROUTES.quotes,
    component: QuotesComponent
  },
  {
    path: ROUTES.quoteAdd,
    component: QuoteFormComponent
  },
  {
    path: ROUTES.quoteEdit,
    component: QuoteFormComponent
  },
  {
    path: '**',
    redirectTo: ROUTES.login
  }
];