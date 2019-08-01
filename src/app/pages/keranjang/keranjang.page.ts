import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-keranjang',
  templateUrl: './keranjang.page.html',
  styleUrls: ['./keranjang.page.scss'],
})
export class KeranjangPage implements OnInit {
user:any;
  constructor(    
    private router: Router,
    private storage: Storage) { }

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
