import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    
   product:  Product[];
  IsLogin:boolean;
  constructor(private http:HttpClient) { }

   
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
   

  private  ProductUrl = 'http://localhost:3000/product';
  
 
  /** GET Customeres from the server */
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.ProductUrl)
  }

  /** GET Customer by id. Will 404 if id not found */
  getProduct(id: String): Observable<Product> {
    const url = `${this.ProductUrl}/${id}`;
    return this.http.get<Product>(url)
  }


  addProduct(productObj: Product): Observable<Product> {
    console.log(productObj);
    return this.http.post<Product>(this.ProductUrl, productObj, this.httpOptions)
  }


  public updateProduct(productObj:Product){
    console.log(productObj);
    return this.http.put(`${this.ProductUrl}/${productObj._id}`, productObj, this.httpOptions);
}


   //DELETE: delete the hero from the server

    
   delete(id: String): Observable<Product> {
     const url = `${this.ProductUrl}/${id}`;
     return this.http.delete<Product>(url, this.httpOptions)
 }


 
         


}
