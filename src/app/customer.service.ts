import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from './customer';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
    
  customer: Customer[];
  IsLogin:boolean;
  constructor(private http:HttpClient) { }

   
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
   

  private customerUrl = 'http://localhost:3000/employees';
  
 
  /** GET Customeres from the server */
  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customerUrl)
  }

  /** GET Customer by id. Will 404 if id not found */
  getCustomer(id: String): Observable<Customer> {
    const url = `${this.customerUrl}/${id}`;
    return this.http.get<Customer>(url)
  }


  addCustomer(customerObj: Customer): Observable<Customer> {
    console.log(customerObj);
    return this.http.post<Customer>(this.customerUrl, customerObj, this.httpOptions)
  }


  public updateCustomer(customerObj: Customer){
    console.log(customerObj);
    return this.http.put(`${this.customerUrl}/${customerObj._id}`, customerObj, this.httpOptions);
}


   //DELETE: delete the hero from the server

    
   delete(id: String): Observable<Customer> {
     const url = `${this.customerUrl}/${id}`;
     return this.http.delete<Customer>(url, this.httpOptions)
 }


 
         




//  GetLogin(){return this.IsLogin;}
//   SetLogin()
//   {
//     if(localStorage.getItem('loginid')!="")
//     {
//       this.IsLogin=true;
//     }
//   }

}
