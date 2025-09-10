import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiMapService {
  static ip = 'http://localhost:9091/api/';
  static Users = `${ApiMapService.ip}users`;  
  static products = `${ApiMapService.ip}products`;  
  static orders = `${ApiMapService.ip}orders`;  
  static peyments = `${ApiMapService.ip}payments`;  
  static Category = `${ApiMapService.ip}categories`;  
  static ordersItems = `${ApiMapService.ip}orderItems`;  
  static register = `${ApiMapService.ip}register`;  
  static auth = `${ApiMapService.ip}auth`;  
  static suport = `${ApiMapService.ip}messages`;  
  
  
  constructor() { }
}
