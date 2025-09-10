 


 

import { Component,inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiMapService } from './api-map.service';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({ providedIn: 'root' })

export class CategoryService {
  httpClient=inject(HttpClient)

  getCategoryData(): Observable<any[]> {
    const CategoryUrl = ApiMapService.Category;
    console.log("getting the data from ",CategoryUrl," .......");
    return this.httpClient.get<any[]>(CategoryUrl); // Return observable
  }
  deleteCategory(id: number): Observable<any> {
    console.log("deleteing the id ..... ",id);
    const CategoryUrl = ApiMapService.Category + '/'+id;
    return this.httpClient.delete<any>(CategoryUrl); // Return observable
  }
  addCategory(category: any): Observable<any> {
    console.log("addCategory",category);
    const CategoryUrl = ApiMapService.Category;
    return this.httpClient.post<any>(CategoryUrl, category); // Return observable
  }

  EditCategory(category: any): Observable<any> {
    console.log("editCategory",category);
    const CategoryUrl = ApiMapService.Category + '/'+category.idCategory;
    return this.httpClient.put<any>(CategoryUrl, category); // Return observable
  }

}