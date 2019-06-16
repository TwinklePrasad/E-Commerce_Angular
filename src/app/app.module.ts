import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerService } from './customer.service';
import { FormsModule } from '@angular/forms';
 
 
import { EditComponent } from './edit/edit.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent } from './product/product.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { SupplierComponent } from './supplier/supplier.component';
import { AddSupplierComponent } from './add-supplier/add-supplier.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { TokenInterceptorService } from './token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    EditComponent,
    AddCustomerComponent,
    ProductComponent,
    ProductCategoryComponent,
    SupplierComponent,
    AddSupplierComponent,
    RegisterComponent,
    LoginComponent,   
  ],

  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
     
    ReactiveFormsModule,
  
    BrowserAnimationsModule,
   
    
     
  ],
  providers: [CustomerService,AuthGuard,AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
