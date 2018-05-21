import { Component, OnInit } from '@angular/core';
import {Router} from 'express';
import {bodyparser} from 'body-parser';
import { Currency } from '../../server/models/currencymodel';
import {ApiService} from '../api.service';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent implements OnInit {
  public currencydata: Currency;
  constructor(private apiService: ApiService) {
     
  }
  ngOnInit() {
    this.apiService.getAllData('currencies').subscribe(
      data => this.currencydata = data,
      err => console.log(err),
      () => console.log("completed")
    );        
  }
}
