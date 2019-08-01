import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostProvider } from 'src/app/providers/post-provider';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-registerkurir',
  templateUrl: './registerkurir.page.html',
  styleUrls: ['./registerkurir.page.scss'],
})
export class RegisterkurirPage implements OnInit {
  
  
  nama: string = "";
  kendaraan: string ="";
  nopol : string = "";
  id_kurir : any;
  nik: string = "";
  random : any;
  username : string = "";
  user : any;
  id_user : string ="";
  id_kurir2:any;

  constructor(
  	private router: Router,
    private postPvdr: PostProvider,
    private storage: Storage,
  	public toastCtrl: ToastController
  ) { 
    
  
  }
  ionViewWillEnter() {
    this.storage.get('session_storage').then((res) => {
     if(res == null){
        this.router.navigate(['/login']);

      }
       else if(this.nik  != this.id_user){
        this.router.navigate(['/home']);
      }
      this.user = res;
      this.username = this.user.username;
      this.nik = this.user.nik;
      
    
      console.log(res);
    });
  }

  ngOnInit() {
  
  }
  
  async prosesregisterkurir(){
    // validation done
  this.id_kurir2=this.id_kurir;
  
  this.random = Math.floor(1000 + Math.random() * 9000);
    this.id_kurir = this.random;
     if (this.nama==""){
      const toast = await this.toastCtrl.create({
        message: 'Nama Harus Diisi',
        duration: 3000
      });
      toast.present();
      
  }
  else if(this.kendaraan==""){
    const toast = await this.toastCtrl.create({
      message: 'Harus Memilih Kendaraan',
      duration: 3000
    });
    toast.present();
    
}
else if(this.nopol==""){
  const toast = await this.toastCtrl.create({
    message: 'Nomor Kendaraan Harus Diisi',
    duration: 3000
  });
  toast.present();
  
}
else{

      let body = {
       
        nama: this.nama,
        kendaraan : this.kendaraan,
        nopol : this.nopol,
        id_kurir: this.id_kurir2,
        id_user : this.nik,
        aksi: 'registerkurir'
      };

      this.postPvdr.postData(body, 'proses-api.php').subscribe(async data =>{
        var alertpesan = data.msg;
        if(data.success){
          this.router.navigate(['/homekurir']);
          const toast = await this.toastCtrl.create({
            message: 'Berhasil Mendaftar',
            duration: 3000
          });
          toast.present();
          
        }
        else{
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

