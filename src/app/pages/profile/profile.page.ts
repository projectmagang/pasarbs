import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { PostProvider } from 'src/app/providers/post-provider';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  id: any;
  nama_user: any;
  alamat: any;
  kota: any;
  kode_pos: any;
  jenis_kelamin: any;
  tempat_lahir: any;
  tanggal_lahir: any;
  kontak: any;
  password: any;
  confirm_password : any;
  nik: any;

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private storage: Storage,
    private postPvdr: PostProvider

  ) { }

  ngOnInit() {
    this.actRoute.params.subscribe((data: any) =>{
  		this.nik = data.nik;
  		this.nama_user = data.nama_user;
      this.alamat = data.alamat;
      this.kota = data.kota;
      this.kode_pos= data.kode_pos;
      this.jenis_kelamin = data.jenis_kelamin;
      this.tempat_lahir = data.tempat_lahir;
      this.tanggal_lahir = data.tanggal_lahir;
      this.kontak = data.kontak;
      this.password= data.password;
      this.confirm_password = data.password;
  		console.log(data);
  	});
  }
  prosesUpdateprofile(){
  	return new Promise(resolve => {
  		let body = {
        nik : this.nik,
        nama_user : this.nama_user,
        alamat : this.alamat,
        kota : this.kota,
        kode_pos : this.kode_pos,
        jenis_kelamin : this.jenis_kelamin,
        tempat_lahir : this.tempat_lahir,
        tanggal_lahir : this.tanggal_lahir,
        kontak : this.kontak,
        password : this.password,
        aksi : 'updateprofile'
  		};

  		this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
        this.storage.clear();
  			this.router.navigate(['/home']);
  			console.log('OK');
  		});
  	});

  }

}
