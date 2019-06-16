import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
 

 
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  public customerId:number;
  public customers:any=[];
  constructor(
    private _router:Router,
    private customerService: CustomerService,
    private _activatedRoute:ActivatedRoute
    ){ }

    ngOnInit() {
      
       
      // this._activatedRoute.paramMap.subscribe((paramMap:ParamMap)=>{
      //   let id = parseInt(paramMap.get('id'));
      //   this.customerId = id;
      // });
       
    
    }
    
    
   
  
  }

