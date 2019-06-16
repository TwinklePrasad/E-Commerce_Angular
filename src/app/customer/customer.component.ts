import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Customer } from '../customer';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
    customers:Customer[]
    selectedId: number;
    public status: boolean = false;
  public message:String = null;
  constructor(private rout: ActivatedRoute,private _router:Router,private  cs:CustomerService) { }

  ngOnInit() {
   this.getCustomer()
  }


  getCustomer() {
    this.cs.getCustomers().subscribe(data => this.customers = data);
  }

  deleteCustomer(id: String) {
    if (confirm("Are you sure to delete " + id)) {
      this.cs.delete(id).subscribe(() => {
        this.getCustomer();
      });

      this.showMessage("Customer is deleted of id "+id);
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




  // isSelected(customer){
  //   return customer.id === this.selectedId;
  // }
  // onClick(c){
  //   this._router.navigate(['.../customer',c.id]);
  // }
   

  
  
}
