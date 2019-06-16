import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
   products:Product[]
   productObj:Product;
  public status: boolean = false;
public message:String = null;
constructor(private _router:Router,private route:ActivatedRoute ,private  ps:ProductService) { }

ngOnInit() {
 this.getProd();
 
}


getProd() {
  this.ps.getProducts().subscribe(data => this.products = data);
}

deleteProduct(id: String) {
  if (confirm("Are you sure to delete " + id)) {
    this.ps.delete(id).subscribe(() => {
      this.getProd();
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