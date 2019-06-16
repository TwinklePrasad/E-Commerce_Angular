import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
 
import { Router } from '@angular/router';
import { Customer } from '../customer';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
 
  constructor(private  cs:CustomerService,  private router: Router) 
  { }
  ngOnInit() {
  }

  state = ["Bihar", "Jharkhand", "U.P", "M.P", "Ahmadabad", "Delhi"];

  customer = new Customer("", "", "", "", "", "");

// customer data submit method
  

  onSubmit(){
   
     
    this.cs.addCustomer(this.customer).subscribe(( )=> this.goBack());
    console.log(this.customer);
  }
  goBack(): void {
   this.router.navigate(['/admin/customer'])
  }
}
