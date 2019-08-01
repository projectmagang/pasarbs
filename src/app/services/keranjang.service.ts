import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class KeranjangService {
  public databarang : any;  
  public logg: string="";
  id: any;

  constructor(public http: Http) { }

  
  async loadData() {
    let type = "application/json; charset=UTF-8";
    let headers = new Headers({'Content-Type' : type});
    let options = new RequestOptions({ headers:headers});
     //await this.http.get("http://192.168.1.12/pasarbs/src/app/pages/php/barang/databarang.php", options)
     await this.http.get("http://192.168.1.12/barang/databarang.php", options)
     .map (res => res.json())
     .subscribe(data=>{
       this.databarang = data;
     },err=>{
       console.log(err._body);
     });
    }
}
