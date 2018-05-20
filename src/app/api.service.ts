import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  currenciesURL = 'http://localhost:3000/api/currencies/';
  
  constructor(private http:HttpClient) {    
   };

  getCurrencyData(): any {
    return this.http.get(this.currenciesURL, {responseType: 'json'});    
  }
}
