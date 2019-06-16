import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SupplierService } from '../supplier.service';
import { Supplier } from '../supplier';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
  suppliers:Supplier[]
  supplierObj:Supplier;
 public status: boolean = false;
public message:String = null;
constructor(private _router:Router,private route:ActivatedRoute ,private  supplierService:SupplierService) { }

ngOnInit() {
this.getSup();

}


getSup() {
 this.supplierService.getSuppliers().subscribe(data => this.suppliers = data);
}

deleteSupplier(id: String) {
 if (confirm("Are you sure to delete " + id)) {
   this.supplierService.delete(id).subscribe(() => {
     this.getSup();
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