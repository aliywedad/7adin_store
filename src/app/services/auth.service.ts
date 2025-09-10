import { Component,inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiMapService } from './api-map.service';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({ providedIn: 'root' })

export class AuthService {
  httpClient=inject(HttpClient)

 authenticate(client: any): Observable<any> {
  console.log("auth",client);
  const UserUrl = ApiMapService.auth;
  return this.httpClient.post<any>(UserUrl, client); // Return observable

}

register(client: any): Observable<any> {
  console.log("register",client);
  const UserUrl = ApiMapService.register;
  return this.httpClient.post<any>(UserUrl, client); // Return observable   


}



}