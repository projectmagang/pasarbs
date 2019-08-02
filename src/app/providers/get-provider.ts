import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetProvider {

  public databarang : any;  
  public datasayur : any;  
  public databuah : any;  
  public logg: string="";
  id: any;

  constructor(public http: Http) {
    console.log('terkoneksi');    
  }

  async loadData(){
    let type = "application/json; charset=UTF-8";
    let headers = new Headers({'Content-Type' : type});
    let options = new RequestOptions({ headers:headers});
    // await this.http.get("http://192.168.1.12/pasarbs/src/app/pages/php/barang/kategori_sayur.php", options)
    await this.http.get("http://192.168.1.12/pasarbs/src/app/pages/php/barang/kategori_sayur.php", options)
    .map (res => res.json())
    .subscribe(data=>{
      this.datasayur = data;
    },err=>{
      console.log(err._body);
    });
   // await this.http.get("http://192.168.1.12/pasarbs/src/app/pages/php/barang/kategori_buah.php", options)
    await this.http.get("http://192.168.1.12/pasarbs/src/app/pages/php/barang/kategori_buah.php", options)
    .map (res => res.json())
    .subscribe(data=>{
      this.databuah = data;
    },err=>{
      console.log(err._body);
    });    
    //await this.http.get("http://192.168.1.12/pasarbs/src/app/pages/php/barang/databarang.php", options)
    await this.http.get("http://192.168.1.12/pasarbs/src/app/pages/php/barang/databarang.php", options)
    .map (res => res.json())
    .subscribe(data=>{
      this.databarang = data;
    },err=>{
      console.log(err._body);
    });
   
  
    }
 

}
