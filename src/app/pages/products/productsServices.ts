import { Component, inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { URLS } from 'src/app/tools/Constants';
@Injectable({ providedIn: 'root' })
export class ProductsServicesComponent {
  httpClient = inject(HttpClient);

  getProductsData(): Observable<any[]> {
    return this.httpClient.get<any[]>(URLS.products);  
  }
    getProductById(id:number): Observable<any[]> {
      const UserUrl = URLS.products +  id+'/';
    return this.httpClient.get<any[]>(UserUrl);  
  }
  deteleProduct(id: number): Observable<any> {
    const UserUrl = URLS.products  + id+'/';
    return this.httpClient.delete<any>(UserUrl);
  }
  addProduct(User: any): Observable<any> {
    return this.httpClient.post<any>(URLS.products, User); // Return observable
  }
  editProduct(User: any): Observable<any> {
    const UserUrl = URLS.products  + User.id+'/' ;
    return this.httpClient.put<any>(UserUrl, User); // Return observable
  }
}
