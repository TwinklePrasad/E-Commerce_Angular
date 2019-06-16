import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddProductCategoryComponent } from './add-product-category/add-product-category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderComponent } from './order/order.component';
import { CustomerComponent } from './customer/customer.component';
 
import { AdminPanelLoginComponent } from './admin-panel-login/admin-panel-login.component';
import { HeaderComponent } from './header/header.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { EditComponent } from './edit/edit.component';
import { AddCustomerComponent } from './add-customer/add-customer.component'
import { ProductComponent } from './product/product.component';
import { SupplierComponent } from './supplier/supplier.component';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component';
 
 
const routes: Routes = [
  {path: '', redirectTo:'admin', pathMatch:'full' },
  // { path:'login',component:AdminPanelLoginComponent},
  { path:'login',component:LoginComponent},
  {path:"register",component:RegisterComponent},
  
  {path:'admin',component:HeaderComponent ,canActivate: [AuthGuard],
  children:[
    {path:'', redirectTo:'dashboard', pathMatch:'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path:'category',component:ProductCategoryComponent},
    {path:'add-category',component:AddProductCategoryComponent},
    
    {path: 'product', component: ProductComponent},
    {path:'add-product', component:AddProductComponent},
    {path:'editproduct/:id', component:AddProductComponent},
    {path:'supplier',component:SupplierComponent},
    {path:'add-supplier',component:AddSupplierComponent},
    {path: 'order', component: OrderComponent},
    
    {path: 'customer', component: CustomerComponent},
    {path:'add-customer',component:EditComponent},
      {path:'customer/:id',component:CustomerDetailsComponent},
      {path:'edit/:id',component:AddCustomerComponent},
    {path: '**', redirectTo:'page-not-found', pathMatch:'full'},
    {path:'page-not-found', component: PageNotFoundComponent}
  
      ]},
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[
  DashboardComponent,
  AddProductCategoryComponent,
  AddProductComponent,
  ViewProductComponent,
  PageNotFoundComponent,
  OrderComponent,
  CustomerComponent, AdminPanelLoginComponent,   HeaderComponent,CustomerDetailsComponent,EditComponent,AddCustomerComponent
];
