import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-provider';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  username: string = "";
  password: string = "";
  nik: string = "";
  nama_user: string = "";
  alamat: string = "";
  kota: string = "";
  kode_pos: string = "";
  jenis_kelamin: string = "";
  tempat_lahir: string = "";
  tanggal_lahir: string = "";
  kontak: string = "";
  confirm_password: string = "";
  constructor(
  	private router: Router,
  	private postPvdr: PostProvider,
  	public toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  async prosesregister(){
    // validation done
    if(this.username==""){
        const toast = await this.toastCtrl.create({
          message: 'Username Harus Diisi',
          duration: 3000
        });
        toast.present();
        
    }
    else if(this.nik==""){
      const toast = await this.toastCtrl.create({
        message: 'Nomor Nik Harus Diisi',
        duration: 3000
      });
      toast.present();
  }else if(this.nama_user==""){
    const toast = await this.toastCtrl.create({
      message: 'Nama Harus Diisi',
      duration: 3000
    });
    toast.present();
}
else if(this.alamat==""){
  const toast = await this.toastCtrl.create({
    message: 'Alamat Harus Diisi',
    duration: 3000
  });
  toast.present();
}
else if(this.kota==""){
  const toast = await this.toastCtrl.create({
    message: 'Kota Harus Diisi',
    duration: 3000
  });
  toast.present();
}
else if(this.kode_pos==""){
  const toast = await this.toastCtrl.create({
    message: 'Kode Pos Harus Diisi',
    duration: 3000
  });
  toast.present();
}
else if(this.jenis_kelamin==""){
  const toast = await this.toastCtrl.create({
    message: 'Jenis Kelamin Harus Diisi',
    duration: 3000
  });
  toast.present();
}
else if(this.tempat_lahir==""){
  const toast = await this.toastCtrl.create({
    message: 'Tempat Lahir Harus Diisi',
    duration: 3000
  });
  toast.present();
}
else if(this.tanggal_lahir==""){
  const toast = await this.toastCtrl.create({
    message: 'Tanggal Lahir Harus Diisi',
    duration: 3000
  });
  toast.present();
}else if(this.kontak==""){
  const toast = await this.toastCtrl.create({
    message: 'Kontak Harus Diisi',
    duration: 3000
  });
  toast.present();
}
else if(this.password==""){
        const toast = await this.toastCtrl.create({
          message: 'Password Dibutuhkan',
          duration: 3000
        });
        toast.present();
    }else if(this.password!=this.confirm_password){
        const toast = await this.toastCtrl.create({
          message: 'Salah Password',
          duration: 3000
        });
        toast.present();
    }else{

      let body = {
        username: this.username,
        password: this.password,
        nik: this.nik,
        nama_user: this.nama_user,
        alamat: this.alamat,
        kota: this.kota,
        kode_pos: this.kode_pos,
        jenis_kelamin: this.jenis_kelamin,
        tempat_lahir: this.tempat_lahir,
        tanggal_lahir: this.tanggal_lahir,
        kontak: this.kontak,
        aksi: 'register'
      };

      this.postPvdr.postData(body, 'proses-api.php').subscribe(async data =>{
        var alertpesan = data.msg;
        if(data.success){
          this.router.navigate(['/login']);
          const toast = await this.toastCtrl.create({
            message: 'Berhasil Mendaftar',
            duration: 3000
          });
          toast.present();
        }else{
          const toast = await this.toastCtrl.create({
            message: alertpesan,
            duration: 3000
          });
          toast.present();
        }
      });

    }
  
  }

  formlogin(){
  	this.router.navigate(['/login']);
  }

}
