import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GetProvider } from 'src/app/providers/get-provider';
import { Http } from '@angular/http';

@Component({
  selector: 'app-buah',
  templateUrl: './buah.page.html',
  styleUrls: ['./buah.page.scss'],
})
export class BuahPage implements OnInit {

  constructor(public http: Http, private buah: GetProvider) {
    this.buah.loadData();
    console.log();
  }

  ngOnInit() {
  }
}
