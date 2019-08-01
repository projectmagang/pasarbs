import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-provider';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-registertoko',
  templateUrl: './registertoko.page.html',
  styleUrls: ['./registertoko.page.scss'],
})
export class RegistertokoPage implements OnInit {
  id_toko : string = "";
  nama_toko: string = "";
  alamat_toko: string = "";
  kota: string = "";
  kode_pos: string = "";
  kontak: string = "";
  keterangan: string = "";
  logo: string = "";
  nik : string = "";
  random : any;
  username : string ="";
  user: any;

  constructor(
    private router: Router,
    private postPvdr: PostProvider,
    private storage: Storage,
    public toastCtrl: ToastController
  ) { 
    this.random =Math.floor(1000+Math.random()*9000);
    this.id_toko = this.random;
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.storage.get('session_storage').then((res)=>{
this.user = res;
this.username = this.user.username;
this.nik = this.user.nik;
    })
  }


  async prosesregistertoko() {
    // validation done

    if (this.nama_toko == "") {
      const toast = await this.toastCtrl.create({
        message: 'nama_toko is required',
        duration: 3000
      });
      toast.present();
    }
    else if (this.alamat_toko == "") {
      const toast = await this.toastCtrl.create({
        message: 'alamat_toko is required',
        duration: 3000
      });
      toast.present();
    }
    else if (this.kota == "") {
      const toast = await this.toastCtrl.create({
        message: 'kota is required',
        duration: 3000
      });
      toast.present();
    }
    else if (this.kode_pos == "") {
      const toast = await this.toastCtrl.create({
        message: 'kode_pos is required',
        duration: 3000
      });
      toast.present();
    }
    else if (this.kontak == "") {
      const toast = await this.toastCtrl.create({
        message: 'kontak is required',
        duration: 3000
      });
      toast.present();
    }
    else if (this.keterangan == "") {
      const toast = await this.toastCtrl.create({
        message: 'keterangan toko is required',
        duration: 3000
      });
      toast.present();
    }
    
     else {

      let body = {
        
        id_toko: this.id_toko,
        nama_toko: this.nama_toko,
        alamat_toko: this.alamat_toko,
        kota: this.kota,
        kode_pos: this.kode_pos,
        kontak: this.kontak,
        keterangan: this.keterangan,
        id_user : this.nik,
        aksi: 'registertoko'
      };

      this.postPvdr.postData(body, 'proses-api.php').subscribe(async data => {
        var alertpesan = data.msg;
        if (data.success) {
          this.router.navigate(['/home']);
          const toast = await this.toastCtrl.create({
            message: 'Daftar berhasil',
            duration: 3000
          });
          toast.present();
        } else {
          const toast = await this.toastCtrl.create({
            message: alertpesan,
            duration: 3000
          });
          toast.present();
        }
      });

    }

  }


  }

