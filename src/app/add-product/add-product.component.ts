import { Component, OnInit } from '@angular/core';
import { ProductCategoryService } from '../product-category.service';
import { ProductCategory } from '../product-category';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Supplier } from '../supplier';
import { SupplierService } from '../supplier.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  categorys:ProductCategory[];
  suppliers:Supplier[];
  image;
  product = new Product("","","","","","","",);
  constructor(private supplierService:SupplierService,private productCategoryService: ProductCategoryService, private productservice:ProductService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.getProductCat();
    this.getPro();
    this.getSupplier();
  }

  getProductCat() {
    this.productCategoryService.getProductCategorys().subscribe(data => this.categorys = data);
  }
  getSupplier() {
    this.supplierService.getSuppliers().subscribe(data => this.suppliers = data);
  }

  onSubmit(form: NgForm){


    console.log(form)
   
    if (form.value._id == "") {
      this.productservice.addProduct(this.product).subscribe(( )=> this.goBack()); 
       console.log(this.product);
         }
   else{
    this.productservice.updateProduct(this.product)
    .subscribe(() => this.goBack());
    }

  }

  addImage(event)
  {
      if(event.target.files && event.target.files.length>0)
      {
        this.image=event.target.files[0];
      }
  }
  
  goBack(): void {
   this.router.navigate(['/admin/product'])
  }

  //edit product

  getPro(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productservice.getProduct(id)
      .subscribe(data => this.product = data);
     
  }

  // save(): void {
  //   this.productservice.updateProduct(this.product)
  //   .subscribe(() => this.goBack());
  //   console.log(this.product);
  //  }
}
