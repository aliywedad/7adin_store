import { Component, inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { URLS } from 'src/app/tools/Constants';

@Injectable({ providedIn: 'root' })
export class AuthService {
  httpClient = inject(HttpClient);

  authenticate(user: any): Observable<any> {
    const body = {
      identifier: user.username,
      password: user.password,
    };
    console.log('body', body);

    return this.httpClient.post<any>(URLS.login, body); // Return observable
  }

  getUserById(id: any): Observable<any> {
    const body = {
      id: id,
    };
    console.log('body', body);

    return this.httpClient.post<any>(URLS.getUserInfoById, body); // Return observable
  }

  register(client: any): Observable<any> {
    console.log('register', client);
    const UserUrl = "";
    return this.httpClient.post<any>(UserUrl, client); // Return observable
  }
}
