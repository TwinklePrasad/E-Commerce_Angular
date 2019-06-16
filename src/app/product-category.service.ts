import { Injectable } from '@angular/core';
import { ProductCategory } from './product-category';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {
  
  category:  ProductCategory[];
  IsLogin:boolean;
  constructor(private http:HttpClient) { }

   
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
   

  private  ProductUrl = 'http://localhost:3000/category';
  
 
  /** GET Customeres from the server */
  getProductCategorys(): Observable<ProductCategory[]> {
    return this.http.get<ProductCategory[]>(this.ProductUrl)
  }

  /** GET Customer by id. Will 404 if id not found */
  getProductCategory(id: String): Observable<ProductCategory> {
    const url = `${this.ProductUrl}/${id}`;
    return this.http.get<ProductCategory>(url)
  }


  addProductCategory(productObj: ProductCategory): Observable<ProductCategory> {
    console.log(productObj);
    return this.http.post<ProductCategory>(this.ProductUrl, productObj, this.httpOptions)
  }


  public updateProductCategory(productObj:ProductCategory){
    console.log(productObj);
    return this.http.put(`${this.ProductUrl}/${productObj._id}`, productObj, this.httpOptions);
}


   //DELETE: delete the hero from the server

    
   delete(id: String): Observable<ProductCategory> {
     const url = `${this.ProductUrl}/${id}`;
     return this.http.delete<ProductCategory>(url, this.httpOptions)
 }


 
         


}
