import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PostProvider } from '../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  username: string;
  password: string;
  nik: string;
  role_id: any;

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
  	private postPvdr: PostProvider,
  	private storage: Storage,
  	public toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.actRoute.params.subscribe((data: any) =>{
    this.role_id =data.role_id;
    console.log(data);
    });
  }

  async prosesLogin(){
    if(this.username != "" && this.username != ""){
      let body = {
        username: this.username,
        password: this.password,
        nik: this.nik,
        aksi: 'login'
      };
      

      this.postPvdr.postData(body, 'proses-api.php').subscribe(async data =>{
        var alertpesan = data.msg;
        if(data.success){
          this.storage.set('session_storage', data.result);
          this.router.navigate(['/home']);
          const toast = await this.toastCtrl.create({
		    message: 'Login Berhasil...',
		  	duration: 2000
		  });
		  toast.present();
		  this.username = "";
		  this.password = "";
          console.log(data);
        }else{
          const toast = await this.toastCtrl.create({
		    message: alertpesan,
		    duration: 2000
		  });
    	  toast.present();
        }
      });

    }else{
      const toast = await this.toastCtrl.create({
		message: 'Username Dan Password Salah...',
		duration: 2000
	  });
	  toast.present();
    }
  }
  async prosesLoginshop(){
    if(this.username != "" && this.username != ""){
      let body = {
        username: this.username,
        password: this.password,
        nik: this.nik,
        aksi: 'login'
      };
     
      if(this.role_id = 1){
        this.postPvdr.postData(body, 'proses-api.php').subscribe(async data =>{
          var alertpesan = data.msg;
          if(data.success){
            this.storage.set('session_storage', data.result);
            this.router.navigate(['/hometoko']);
            const toast = await this.toastCtrl.create({
          message: 'Login Berhasil...',
          duration: 2000
        });
        toast.present();
        this.username = "";
        this.password = "";
            console.log(data);
          }else{
            const toast = await this.toastCtrl.create({
          message: alertpesan,
          duration: 2000
        });
          toast.present();
          }
        });
      }else{
        const toast = await this.toastCtrl.create({
      message: 'Username Dan Password Salah...',
      duration: 2000
      });
      toast.present();
      }
      

      

    }else{
      const toast = await this.toastCtrl.create({
		message: 'Username Dan Password Salah...',
		duration: 2000
	  });
	  toast.present();
    }
  }
  async prosesLoginkurir(){
    if(this.username != "" && this.username != ""){
      let body = {
        username: this.username,
        password: this.password,
        nik: this.nik,
        aksi: 'login'
      };
     
      if(this.role_id = 1){
        this.postPvdr.postData(body, 'proses-api.php').subscribe(async data =>{
          var alertpesan = data.msg;
          if(data.success){
            this.storage.set('session_storage', data.result);
            this.router.navigate(['/homekurir']);
            const toast = await this.toastCtrl.create({
          message: 'Login Berhasil...',
          duration: 2000
        });
        toast.present();
        this.username = "";
        this.password = "";
            console.log(data);
          }else{
            const toast = await this.toastCtrl.create({
          message: alertpesan,
          duration: 2000
        });
          toast.present();
          }
        });
      }else{
        const toast = await this.toastCtrl.create({
      message: 'Username Dan Password Salah...',
      duration: 2000
      });
      toast.present();
      }
      

      

    }else{
      const toast = await this.toastCtrl.create({
		message: 'Username Dan Password Salah...',
		duration: 2000
	  });
	  toast.present();
    }
  }

  formRegister(){
  	this.router.navigate(['/register']);
  }

}
