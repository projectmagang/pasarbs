import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BarangService {
  url = 'http://localhost/barang';

  constructor(private http: HttpClient) { }
  kategori(id) {
return this.http.get('${this.url}?i=${id}');
  }
}
