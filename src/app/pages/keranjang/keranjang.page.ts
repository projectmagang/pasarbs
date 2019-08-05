import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { GetProvider } from 'src/app/providers/get-provider';

@Component({
  selector: 'app-keranjang',
  templateUrl: './keranjang.page.html',
  styleUrls: ['./keranjang.page.scss'],
})
export class KeranjangPage implements OnInit {
user:any;
selectedItems = [];
 
total = 0;
  constructor(    
    private router: Router,
    private barang: GetProvider,
    private storage: Storage) {
      this.barang.loadData();
     }

    ngOnInit() {
      let barang = this.barang.databarang;
      let selected = {};
      for (let obj of barang) {
        if (selected[obj.id]) {
          selected[obj.id].count++;
        } else {
          selected[obj.id] = {...obj, count: 1};
        }
      }
      this.selectedItems = Object.keys(selected).map(key => selected[key])
      this.total = this.selectedItems.reduce((a, b) => a + (b.count * b.harga), 0);

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
