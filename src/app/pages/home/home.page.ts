import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { PostProvider } from 'src/app/providers/post-provider';
import { ToastController, NavController, NavParams } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { GetProvider } from 'src/app/providers/get-provider';
import { Router, NavigationExtras} from '@angular/router';
import { ModalController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  searchTerm : any="";
  cart = [];
  items = [];
  username: any;
  user: any;
  nama_user: any;
  alamat: any;
  kota: any;
  kode_pos: any;
  jenis_kelamin: any;
  confirm_password: any;
  tempat_lahir: any;
  tanggal_lahir: any;
  kontak: any;
  password: any;
  nik: any;
  public isSearchbarOpened = false;
  constructor(private http: HttpClient,
    public navCtrl: NavController,
              private router: Router,
  	           private postPvdr: PostProvider,
              private storage: Storage,
              private barang: GetProvider,
              private modalController: ModalController,
              public toastCtrl: ToastController
    ) {
      this.barang.loadData();
      console.log();
  }
  ngOnInit() {
    this.items = this.barang.getProducts();
    this.cart = this.barang.getCart();
  }
  
  ionViewDidLoad(){
    this.setFilteredItems();
  }
    ionViewWillEnter() {
      this.storage.get('session_storage').then((res) => {
        if(res == null){
          this.router.navigate(['/login']);
        }
        this.user = res;
        this.nik = this.user.nik;
        this.nama_user = this.user.nama_user;
        this.alamat = this.user.alamat; 
        this.kota = this.user.kota;
        this.kode_pos =this.user.kode_pos;
        this.jenis_kelamin = this.user.jenis_kelamin;
        this.tempat_lahir = this.user.tempat_lahir;
      this.tanggal_lahir = this.user.tanggal_lahir;
      this.kontak = this.user.kontak;
      this.password= this.user.password;
      this.confirm_password = this.user.password;

        console.log(res);
      });
    }
 async prosesLogout() {
   this.storage.clear();
   this.router.navigate(['/login']);
   const toast = await this.toastCtrl.create({
    message: 'Berhasil Keluar',
    duration: 3000
  });
   toast.present();
 }
 addToCart(product) {
  this.barang.addProduct(product);
}

openCart() {
  this.router.navigate(['keranjang']);
}
slidesDidLoad(slides) {
  slides.startAutoplay();
}

updateprofile(nik,nama_user,alamat,kota,kode_pos,jenis_kelamin,tempat_lahir,tanggal_lahir,kontak,password,confirm_password){
  this.router.navigate(['/profile/' + nik + '/' + nama_user + '/' + alamat + '/' + kota + '/'+ kode_pos + '/'+jenis_kelamin+'/'+tempat_lahir+'/'+tanggal_lahir+'/'+kontak+'/'+password+'/'+confirm_password]);
}
setFilteredItems() {
 
  this.barang.databarang = this.barang.filterItems(this.searchTerm);

}

}
