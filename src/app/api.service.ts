import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  baseURL = 'http://localhost:3000/api/';
  
  constructor(private http:HttpClient) {    
   };

  getAllData(apiItem: String): any {
    return this.http.get(this.baseURL+apiItem, {responseType: 'json'});    
  }
}
