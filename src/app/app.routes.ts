import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { AboutComponent } from '../pages/about/about.component';
import { CategoryComponent } from '../pages/category/category.component';
import { ContactComponent } from '../pages/contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // default route
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'category', component: CategoryComponent },
    { path: 'contact', component: ContactComponent }
];
