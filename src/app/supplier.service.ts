import { Injectable } from '@angular/core';
import { Supplier } from './supplier';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  supplier:Supplier[];
   
  constructor(private http:HttpClient) { }

   
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
   

  private  SupplierUrl = 'http://localhost:3000/supplier';
  
 
  /** GET Customeres from the server */
  getSuppliers(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(this.SupplierUrl)
  }

  /** GET Customer by id. Will 404 if id not found */
  getSupplier(id: String): Observable<Supplier> {
    const url = `${this.SupplierUrl}/${id}`;
    return this.http.get<Supplier>(url)
  }


  addSupplier(SupplierObj: Supplier): Observable<Supplier> {
    console.log(SupplierObj);
    return this.http.post<Supplier>(this.SupplierUrl, SupplierObj, this.httpOptions)
  }


  public updateSupplier(SupplierObj:Supplier){
    console.log(SupplierObj);
    return this.http.put(`${this.SupplierUrl}/${SupplierObj._id}`, SupplierObj, this.httpOptions);
}


   //DELETE: delete the hero from the server

    
   delete(id: String): Observable<Supplier> {
     const url = `${this.SupplierUrl}/${id}`;
     return this.http.delete<Supplier>(url, this.httpOptions)
 }


 
}
