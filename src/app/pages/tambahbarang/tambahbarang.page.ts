import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostProvider } from 'src/app/providers/post-provider';

@Component({
  selector: 'app-tambahbarang',
  templateUrl: './tambahbarang.page.html',
  styleUrls: ['./tambahbarang.page.scss'],
})
export class TambahbarangPage implements OnInit {
  nama: any;
  kategori: any;
  stok: any;
  harga: any;
  kondisi: any;
  satuan: any;
  gambar: any;
  id: any;

  constructor(
    private postPvdr: PostProvider,
  	private router: Router,
  	private actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  	this.actRoute.params.subscribe((data: any) =>{
  		this.id = data.id;
  		this.nama = data.nama;
      this.kategori = data.kategori;
      this.stok = data.stok;
      this.harga = data.harga;
      this.kondisi = data.kondisi;
      this.satuan = data.satuan;
      this.gambar = data.gambar;
  		console.log(data);
  	});
  }
  tambahproduk(){
  	return new Promise(resolve => {
  		let body = {
        nama : this.nama,
        kategori : this.kategori,
        stok : this.stok,
        harga : this.harga,
        kondisi : this.kondisi,
        satuan : this.satuan,
        gambar : this.gambar,
        aksi : 'inputbarang'
  		};

  		this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
  			this.router.navigate(['/hometoko']);
  			console.log('OK');
  		});
  	});

  }

  updateproduk(){
  	return new Promise(resolve => {
  		let body = {
        nama : this.nama,
        kategori : this.kategori,
        stok : this.stok,
        harga : this.harga,
        kondisi : this.kondisi,
        satuan : this.satuan,
        gambar : this.gambar,
        aksi : 'updateproduk'
  		};

  		this.postPvdr.postData(body, 'proses-api.php').subscribe(data => {
  			this.router.navigate(['/customer']);
  			console.log('OK');
  		});
  	});

  }
}
