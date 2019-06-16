import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductCategory } from '../product-category';
import { ProductCategoryService } from '../product-category.service';
@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {

  productCategorys:ProductCategory[]
   categoryObj:ProductCategory;
  public status: boolean = false;
public message:String = null;
constructor(private _router:Router,private route:ActivatedRoute ,private  productCategry:ProductCategoryService) { }

ngOnInit() {
 this.getProdCategory();
 
}


getProdCategory() {
  this.productCategry.getProductCategorys().subscribe(data => this.productCategorys = data);
}

deleteProductCategory(id: String) {
  if (confirm("Are you sure to delete " + id)) {
    this.productCategry.delete(id).subscribe(() => {
      this.getProdCategory();
    });

    this.showMessage("Product is deleted of id "+id);
  }
}


showMessage(message:String){
  this.message = message;
  this.status = true;
}

hideMessage(){
  this.status = false;
  this.message = null;
}


}