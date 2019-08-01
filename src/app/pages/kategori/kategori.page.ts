import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router} from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.page.html',
  styleUrls: ['./kategori.page.scss'],
})
export class KategoriPage implements OnInit {
  user: any;
  constructor(private http: HttpClient, private storage: Storage, private router: Router) {

  }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.storage.get('session_storage').then((res) => {
      if(res == null){
        this.router.navigate(['/login']);
      }
this.user = res;
    });
  }


}
