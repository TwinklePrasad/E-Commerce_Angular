import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
 
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
 
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public objectOfCustomer: Customer;
  constructor(private  cs:CustomerService, private router: Router,private route: ActivatedRoute) { 
   
}
   
state = ["Bihar", "Jharkhand", "U.P", "M.P", "Ahmadabad", "Delhi"];
  optionSelected: any;

onOptionsSelected(event){
 console.log(event); //option value will be sent as event
}

  ngOnInit() {
    this.getCus(); 
  }

  getCus(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.cs.getCustomer(id)
      .subscribe(data => this.objectOfCustomer = data);
     
  }


  save(): void {
    this.cs.updateCustomer(this.objectOfCustomer)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.router.navigate(['/admin/customer'])
   }
}
