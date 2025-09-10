import { Component,inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiMapService } from './api-map.service';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({ providedIn: 'root' })

export class ProductsService {
  httpClient=inject(HttpClient)

  getProductData(): Observable<any[]> {
    const ProductUrl = ApiMapService.products;
    console.log("getting the data from ",ProductUrl," .......");
    return this.httpClient.get<any[]>(ProductUrl); // Return observable
  }
  deleteProduct(id: number): Observable<any> {
    console.log("deleteing the id ..... ",id);
    const ProductUrl = ApiMapService.products + '/'+id;
    return this.httpClient.delete<any>(ProductUrl); // Return observable
  }

  addProduct(product: any): Observable<any> {
    console.log("addProduct",product);
    const ProductUrl = ApiMapService.products;
    return this.httpClient.post<any>(ProductUrl, product); // Return observable
  }
  EditProduct(product: any): Observable<any> {
    console.log("editProduct",product);
    const ProductUrl = ApiMapService.products + '/'+product.idProduct;
    return this.httpClient.put<any>(ProductUrl, product); // Return observable
  }

}