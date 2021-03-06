import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { PostProvider } from 'src/app/providers/post-provider';
import { ToastController, NavController, NavParams } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { GetProvider } from 'src/app/providers/get-provider';
import { Router, NavigationExtras} from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalbarangPage } from '../modalbarang/modalbarang.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username: any;
  user: any;
public items: any;
  constructor(private http: HttpClient,
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

    ionViewWillEnter() {
      this.storage.get('session_storage').then((res) => {
        if(res == null){
          this.router.navigate(['/login']);
        }
        this.user = res;
        this.username = this.user.username;
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



}
