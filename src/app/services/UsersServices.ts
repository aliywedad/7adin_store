import { Component,inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiMapService } from './api-map.service';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({ providedIn: 'root' })

export class UsersServicesComponent {
  httpClient=inject(HttpClient)
  
  
  getUserData(): Observable<any[]> {
    const UserUrl = ApiMapService.Users;
    return this.httpClient.get<any[]>(UserUrl); // Return observable
  }
  deteleClient(id: number): Observable<any> {
    console.log("deleteing the id ..... ",id);
    const UserUrl = ApiMapService.Users +'/'+id;
    console.log("deleteing the id ..... ",UserUrl);
    return this.httpClient.delete<any>(UserUrl);  
  }
  addClient(client: any): Observable<any> {
    console.log("addClient",client);
    const UserUrl = ApiMapService.Users;
    return this.httpClient.post<any>(UserUrl, client); // Return observable
  }
  editProduct(client: any): Observable<any> {
    console.log("editProduct",client);
    const UserUrl = ApiMapService.Users + '/'+client.id;
    return this.httpClient.put<any>(UserUrl, client); // Return observable
  }

}