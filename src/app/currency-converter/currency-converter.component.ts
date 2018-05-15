import { Component, OnInit } from '@angular/core';
//import {myDatabase} from '../../database';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent implements OnInit {

  public myvar : any;
  constructor() {
    this.myvar = -100;
    //let myDB = new myDatabase();
    //myDB.mydbsync();
    }

  ngOnInit() {
  }

}
