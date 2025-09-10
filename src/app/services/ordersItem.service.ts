 

import { Component,inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiMapService } from './api-map.service';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({ providedIn: 'root' })

export class OrdersItemsService {
  httpClient=inject(HttpClient)

  getOrdersItemsData(): Observable<any[]> {
    const OrdersItemsUrl = ApiMapService.ordersItems;
    console.log("getting the data from ",OrdersItemsUrl," .......");
    return this.httpClient.get<any[]>(OrdersItemsUrl); // Return observable
  }
  deleteOrderItem(id: number): Observable<any> {
    console.log("deleteing the id ..... ",id);
    const ordersItemsUrl = ApiMapService.ordersItems + '/'+id;
    return this.httpClient.delete<any>(ordersItemsUrl); // Return observable
  }
  addOrder(order: any): Observable<any> {
    const ordersItemsUrl = ApiMapService.ordersItems;
    return this.httpClient.post<any>(ordersItemsUrl, order); // Return observable
  }
  editOrder(order: any): Observable<any> {
    const ordersItemsUrl = ApiMapService.ordersItems+'/'+order.id_orderItem;
    return this.httpClient.put<any>(ordersItemsUrl, order); // Return observable
  }

}