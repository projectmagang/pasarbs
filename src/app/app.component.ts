import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PostProvider } from 'src/app/providers/post-provider';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  username: string;
  user: any;
 
  constructor(
    private PostProvider: PostProvider,
    private router: Router,
    private storage: Storage,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
    public toastCtrl: ToastController
  ) {
    this.initializeApp();
  }
  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if (this.platform.is('android')) {
        this.statusBar.backgroundColorByHexString("#CC3980FF");
      }
      this.splashScreen.hide();
    });
    this.storage.get('session_storage').then((res)=>{
      if(res == null){
        this.router.navigate(['/login']);
      }else{
       
      }
    });
  }
  ionViewWillEnter(){
    this.storage.get('session_storage').then((res)=>{
this.user = res;
this.username = this.user.username;
    })
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
