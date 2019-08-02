import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostProvider {
server = "http://192.168.1.12/pasarbs/src/app/pages/php/loginregister/";

//server = "http://192.168.1.15/pasarbs/src/app/pages/php/loginregister/";//
constructor(public http: Http) {

}

postData(body, file) {
const type = "application/json; charset=UTF-8";
const headers = new Headers({ 'Content-Type': type });
const options = new RequestOptions({ headers: headers });

return this.http.post(this.server + file, JSON.stringify(body), options)
.map(res => res.json());
}
}
