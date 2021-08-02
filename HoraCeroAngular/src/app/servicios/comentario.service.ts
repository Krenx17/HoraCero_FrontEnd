import { Injectable } from '@angular/core';
import { GLOBAL } from './global.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coment } from '../modelos/comentario.model';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  public headersvar = new HttpHeaders().set('Content-Type', 'application/json');
  public url: String;
  public identidad: any;
  public token: any;

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url
  }

  newcom(comentario: Coment): Observable<any>{
    let headersToken = this.headersvar.set('Authorization', this.getToken2())
    let data = JSON.stringify(comentario)

    return this._http.post(this.url+'/newcoment', data, {headers: headersToken})
  }

  editcom(comentario: Coment): Observable<any>{
    let headersToken = this.headersvar.set('Authorization', this.getToken2())
    let data = JSON.stringify(comentario)

    return this._http.post(this.url+'/editcoment/'+comentario._id, data, {headers: headersToken})
  }

  deletcom(id: String): Observable<any>{
    let headersToken = this.headersvar.set('Authorization', this.getToken2())

    return this._http.delete(this.url+'/deletcoment/'+id, {headers: headersToken})
  }

  allcom(): Observable<any>{
    return this._http.get(this.url+'/coments', {headers: this.headersvar})
  }

  onecom(id: String): Observable<any>{
    return this._http.get(this.url+'/coment/'+id, {headers: this.headersvar})
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
