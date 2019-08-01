import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetProvider } from 'src/app/providers/get-provider';
import { Http, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-sayur',
  templateUrl: './sayur.page.html',
  styleUrls: ['./sayur.page.scss'],
})
export class SayurPage {
  public warna: any;
  constructor(public http: Http, private sayur: GetProvider) {
    this.sayur.loadData();
    console.log();
  }
 
}

