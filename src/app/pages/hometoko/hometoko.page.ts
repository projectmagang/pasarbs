import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostProvider } from 'src/app/providers/post-provider';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-hometoko',
  templateUrl: './hometoko.page.html',
  styleUrls: ['./hometoko.page.scss'],
})
export class HometokoPage implements OnInit {
  user: any;
  username: any;
  toko2: any[];

  constructor(
    private router: Router,
  	private postPvdr: PostProvider,
    private storage: Storage,
    public toastCtrl: ToastController) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.storage.get('session_storage').then((res)=>{
       if(res == null){
        this.router.navigate(['/login']);
      }
      this.user = res;
      this.username = this.user.username;
      console.log(res);
    });
    
  	this.toko2 = [];
  	this.loadbarangtoko();
  }
  loadbarangtoko() {
  	return new Promise(resolve => {
  		let body = {
  			aksi : 'getdata',

  		};

  		this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
  			for(let toko of data.result) {
  				this.toko2.push(toko);
  			}
  			resolve(true);
  		});
  	});
  }
  hapusbarang(id){

  	let body = {
  			aksi : 'hapusbarang',
  			id : id
  		};

  		this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
  			this.ionViewWillEnter();
  		});

  }
  updatebarang(id,nama,kategori,stok,harga,kondisi,satuan,gambar){
  	this.router.navigate(['/tambahbarang/' + id + '/' + nama + '/' + kategori + '/' + stok + '/'+ harga + '/'+kondisi+'/'+satuan+'/'+gambar]);
  }
  tambahbarang(){
  	this.router.navigate(['/tambahbarang']);
  }

}
