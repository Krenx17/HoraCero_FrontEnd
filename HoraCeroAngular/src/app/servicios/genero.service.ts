import { Injectable } from '@angular/core';
import { GLOBAL } from './global.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Theme } from '../modelos/genero.model';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {
  public headersvar = new HttpHeaders().set('Content-Type', 'application/json');
  public url: String;
  public identidad: any;
  public token: any;

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url
  }

  newtheme(theme: Theme): Observable<any>{
    let headersToken = this.headersvar.set('Authorization', this.getToken2())
    let data = JSON.stringify(theme)

    return this._http.post(this.url+'/newtheme', data, {headers: headersToken})
  }

  edittheme(theme: Theme): Observable<any>{
    let headersToken = this.headersvar.set('Authorization', this.getToken2())
    let data = JSON.stringify(theme)

    return this._http.post(this.url+'/edittheme/'+theme._id, data, {headers: headersToken})
  }

  delettheme(id: String): Observable<any>{
    let headersToken = this.headersvar.set('Authorization', this.getToken2())

    return this._http.delete(this.url+'/deletetheme/'+id, {headers: headersToken})
  }

  allthemes(): Observable<any>{
    let headersToken = this.headersvar.set('Authorization', this.getToken2())

    return this._http.get(this.url+'/allthemes', {headers: headersToken})
  }

  onetheme(id: String): Observable<any>{
    let headersToken = this.headersvar.set('Authorization', this.getToken2())

    return this._http.get(this.url+'/theme/'+id, {headers: headersToken})
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
