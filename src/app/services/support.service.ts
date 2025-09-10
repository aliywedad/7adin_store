import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ApiMapService } from './api-map.service';

@Injectable({
  providedIn: 'root'
})
export class SupportService {

  constructor() { }

  httpClient=inject(HttpClient)

    getSupportData(): Observable<any[]> {
      const SupportUrl = ApiMapService.suport+'/users';
      console.log("getting the data from ",SupportUrl," .......");
      return this.httpClient.get<any[]>(SupportUrl); // Return observable
    }

    send(message: any): Observable<any> {
      console.log("send message ",message);
      const messageUrl = ApiMapService.suport;
      return this.httpClient.post<any>(messageUrl, message); // Return observable
    }



    getSupportmessages(id : number): Observable<any[]> {
      const SupportUrl = ApiMapService.suport+'/'+id;
      console.log("getting the data from ",SupportUrl," .......");
      return this.httpClient.get<any[]>(SupportUrl); // Return observable
    }
}
