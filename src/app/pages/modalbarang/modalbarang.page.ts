import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetProvider } from 'src/app/providers/get-provider';

@Component({
  selector: 'app-modalbarang',
  templateUrl: './modalbarang.page.html',
  styleUrls: ['./modalbarang.page.scss'],
})
export class ModalbarangPage implements OnInit {
  id = null;
  nama = null;
  kategori = null;
  stok = null;
  harga = null;
  kondisi = null;
  satuan = null;
  gambar = null;
  constructor(private actRoute: ActivatedRoute,
    private router: Router,
  	private getProv: GetProvider,) { 
    }

  ngOnInit() {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.nama = this.actRoute.snapshot.paramMap.get('nama');
    this.kategori = this.actRoute.snapshot.paramMap.get('kategori');
    this.stok = this.actRoute.snapshot.paramMap.get('stok');
    this.harga = this.actRoute.snapshot.paramMap.get('harga');
    this.kondisi = this.actRoute.snapshot.paramMap.get('kondisi');
    this.satuan= this.actRoute.snapshot.paramMap.get('satuan');
    this.gambar = this.actRoute.snapshot.paramMap.get('gambar');
  }

}
