import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProductComponent } from './app/create-product/create-product.component';
import { ViewUserComponent } from './app/view-user/view-user.component';
import { AuthGuard } from './auth-guard.service';
import { CreateUserComponent } from './create-user/create-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LoginComponent } from './login/login.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'create', component: CreateUserComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardComponent,
    children: [
      { path: 'users', component: UsersListComponent },
      { path: 'products', component: ProductsListComponent },
      {path: 'createp', component: CreateProductComponent},
      {path:'view/:id', component:ViewUserComponent},

      {
        path: 'edit',
        children: [
          { path: 'user/:id', component: EditUserComponent },
          { path: 'product/:id', component: EditProductComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
