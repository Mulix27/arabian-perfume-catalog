// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DesignerListComponent } from './pages/products/designer-list/designer-list.component';
import { PerfumeListComponent } from './pages/products/perfume-list/perfume-list.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: DesignerListComponent },
  { path: 'products/:designer', component: PerfumeListComponent },
  { path: 'contact', component: ContactComponent },
];
