 

import { Component,inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiMapService } from './api-map.service';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({ providedIn: 'root' })

export class OrdersService {
  httpClient=inject(HttpClient)

  getOrdersData(): Observable<any[]> {
    const OrdersUrl = ApiMapService.orders;
    console.log("getting the data from ",OrdersUrl," .......");
    return this.httpClient.get<any[]>(OrdersUrl); // Return observable
  }
  deleteOrder(id: number): Observable<any> {
    console.log("deleteing the id ..... ",id);
    const ordersUrl = ApiMapService.orders + '/'+id;
    return this.httpClient.delete<any>(ordersUrl); // Return observable
  }
  addOrder(order: any): Observable<any> {
    const ordersUrl = ApiMapService.orders;
    return this.httpClient.post<any>(ordersUrl, order); // Return observable
  }

}