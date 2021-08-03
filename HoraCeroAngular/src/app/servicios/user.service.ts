import { Injectable } from '@angular/core';
import { GLOBAL } from './global.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../modelos/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public headersvar = new HttpHeaders().set('Content-Type', 'application/json');
  public url: String;
  public identidad: any;
  public token: any;

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url
  }
  
  login(usuario: User, getToken = ''): Observable<any>{
    if(getToken !=''){
      usuario.getToken = getToken
    }
    let data = JSON.stringify(usuario)

    return this._http.post(this.url+'/login', data, {headers: this.headersvar})
  }

  register(usuario: User): Observable<any>{
    let data = JSON.stringify(usuario)

    return this._http.post(this.url+'/register', data, {headers: this.headersvar})
  }
  
  user(usuario: User): Observable<any>{
    let headersToken = this.headersvar.set('Authorization', this.getToken2())
    let data = JSON.stringify(usuario)

    return this._http.post(this.url+'/user', data, {headers: headersToken})
  }

  edituser(usuario: User): Observable<any>{
    let headersToken = this.headersvar.set('Authorization', this.getToken2())
    let data = JSON.stringify(usuario)

    return this._http.put(this.url+'/edituser/'+usuario._id, data, {headers: headersToken})
  }

  deletuser(id: String): Observable<any>{
    let headersToken = this.headersvar.set('Authorization', this.getToken2())

    return this._http.delete(this.url+'/deletuser/'+id, {headers: headersToken})
  }

  alluser(): Observable<any>{
    let headersToken = this.headersvar.set('Authorization', this.getToken2())

    return this._http.get(this.url+'/users', {headers: headersToken})
  }

  profile(id: any): Observable<any>{
    let headersToken = this.headersvar.set('Authorization', this.getToken2())

    return this._http.get(this.url + '/oneuser/' + id, {headers: headersToken})
  }

  getIdentidad(){
    var identidad2 = JSON.parse(localStorage.getItem('identidad') || '{}');
    if (identidad2 !="undefined"){
      this.identidad =identidad2
    }else{
      this.identidad = null
    }
    return this.identidad;
  }

  getToken2(){
    var token2 = localStorage.getItem('token')
    if (token2 !="undefined"){
      this.token =token2
    }else{
      this.token = null
    }
    return this.token;
  }
}
