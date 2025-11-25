import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { AboutComponent } from '../pages/about/about.component';
import { CategoryComponent } from '../pages/category/category.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { CartComponent } from '../components/cart/cart.component';
import { FishesComponent } from '../pages/fishes/fishes.component';
import { FruitsVegsComponent } from '../pages/fruits-vegs/fruits-vegs.component';
import { GroceriesComponent } from '../pages/groceries/groceries.component';
import { HouseholdComponent } from '../pages/household/household.component';
import { ElectronicsComponent } from '../pages/electronics/electronics.component';
import { MenuComponent } from '../pages/menu/menu.component';
import { ReviewsComponent } from '../pages/reviews/reviews.component';
import { LoginComponent } from '../pages/login/login.component';
import { SignupComponent } from '../pages/signup/signup.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'category', component: CategoryComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'reviews', component: ReviewsComponent },
    { path: 'cart', component: CartComponent },
    { path: 'fishes', component: FishesComponent },
    { path: 'fruits-vegs', component: FruitsVegsComponent },
    { path: 'groceries', component: GroceriesComponent },
    { path: 'household', component: HouseholdComponent },
    { path: 'electronics', component: ElectronicsComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'signup', component: SignupComponent, pathMatch: "full" },

];
