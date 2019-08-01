import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, NavParams, ModalController } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { Router} from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  user: any;

  constructor(private http: Http, private modalCtrl: ModalController, private router: Router, private storage: Storage) { }

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
