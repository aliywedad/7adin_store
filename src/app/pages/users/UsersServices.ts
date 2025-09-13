import { Component, inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { URLS } from 'src/app/tools/Constants';
@Injectable({ providedIn: 'root' })
export class UsersServicesComponent {
  httpClient = inject(HttpClient);

  getUserData(): Observable<any[]> {
    return this.httpClient.get<any[]>(URLS.users);  
  }
    getUserById(id:number): Observable<any[]> {
      const UserUrl = URLS.users +  id+'/';
    return this.httpClient.get<any[]>(UserUrl);  
  }
  deteleUser(id: number): Observable<any> {
    const UserUrl = URLS.users  + id+'/';
    return this.httpClient.delete<any>(UserUrl);
  }
  addUser(User: any): Observable<any> {
    return this.httpClient.post<any>(URLS.users, User); // Return observable
  }
  editUser(User: any): Observable<any> {
    const UserUrl = URLS.users  + User.id+'/' ;
    return this.httpClient.put<any>(UserUrl, User); // Return observable
  }
}
