import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersListComponent } from './users-list/users-list.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AuthInterceptor } from './auth-interceptor';
import { EditProductComponent } from './edit-product/edit-product.component';
import { CreateProductComponent } from './app/create-product/create-product.component';
import { CreateCategoriesComponent } from './app/create-categories/create-categories.component';
import { ViewUserComponent } from './app/view-user/view-user.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    UsersComponent,
    LoginComponent,
    DashboardComponent,
    UsersListComponent,
    ProductsListComponent,
    EditUserComponent,
    EditProductComponent,
    CreateProductComponent,
    CreateCategoriesComponent,
    ViewUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
