import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { LocalStorage } from '@ngx-pwa/local-storage';
 
import { Router } from '@angular/router';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
 

@Component({
  selector: 'app-admin-panel-login',
  templateUrl: './admin-panel-login.component.html',
  styleUrls: ['./admin-panel-login.component.css']
})
export class AdminPanelLoginComponent implements OnInit {
email;
password;
 myForm:FormGroup;
   constructor(private ser:CustomerService,public rout:Router, localstorage:LocalStorage  ) {
   }
    //     this.myForm=fb.group({
//       'name': ['', [Validators.required,validators.pattern()]]
//       });
//    }
  login()
  {
    console.log()
    if(this.email=="twinkle@gmail.com" && this.password=="Twinkle@19")
    {
      localStorage.setItem("loginid",this.email);
      // this.ser.SetLogin();
      this.rout.navigateByUrl("/admin");
      console.log(localStorage.getItem('loginid'))
    }
    else{
      alert('Login Again');
    }
  }

  

  ngOnInit() {
   
  }

}
