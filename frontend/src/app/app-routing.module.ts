import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { CareerComponent } from './career/career.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductsComponent } from './products/products.component';
import { SupplyComponent } from './supply/supply.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'career', component: CareerComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'services', component: SupplyComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }, // Wildcard route (any other route) to Homepage
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
