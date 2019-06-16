import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductCategory } from '../product-category';
import { ProductCategoryService } from '../product-category.service';

@Component({
  selector: 'app-add-product-category',
  templateUrl: './add-product-category.component.html',
  styleUrls: ['./add-product-category.component.css']
})
export class AddProductCategoryComponent implements OnInit {

  constructor(private  categoryService:ProductCategoryService,  private router: Router) 
  { }
  ngOnInit() {
  }

  
  categorys:ProductCategory[];
  productCategorys= new ProductCategory("", "", "", "",);

// customer data submit method
  

  onSubmit(){
    this.categoryService.addProductCategory(this.productCategorys).subscribe(( )=> this.goBack());
  }
  goBack(): void {
   this.router.navigate(['/admin/category'])
  }
}

