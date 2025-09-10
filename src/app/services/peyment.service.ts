 



import { Component,inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiMapService } from './api-map.service';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({ providedIn: 'root' })

export class PeymentService {
  httpClient=inject(HttpClient)

  getPaymentData(): Observable<any[]> {
    const PaymentUrl = ApiMapService.peyments;
    console.log("getting the data from ",PaymentUrl," .......");
    return this.httpClient.get<any[]>(PaymentUrl); // Return observable
  }

  deletePayment(id: number): Observable<any> {
    console.log("deleteing the id ..... ",id);
    const PaymentUrl = ApiMapService.peyments + '/'+id;
    return this.httpClient.delete<any>(PaymentUrl); // Return observable
  }
  addPayment(payment: any): Observable<any> {
    console.log("addPayment",payment);
    const PaymentUrl = ApiMapService.peyments;
    return this.httpClient.post<any>(PaymentUrl, payment); // Return observable
  }
  editPayment(payment: any): Observable<any> {
    console.log("editPayment",payment);
    const PaymentUrl = ApiMapService.peyments + '/'+payment.idPayment;
    return this.httpClient.put<any>(PaymentUrl, payment); // Return observable
  }

}