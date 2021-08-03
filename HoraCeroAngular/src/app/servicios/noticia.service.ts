import { Injectable } from '@angular/core';
import { GLOBAL } from './global.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from '../modelos/noticia.model';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {
  public headersvar = new HttpHeaders().set('Content-Type', 'application/json');
  public url: String;
  public identidad: any;
  public token: any;

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url
  }

  newnot(noticia: News): Observable<any>{
    let headersToken = this.headersvar.set('Authorization', this.getToken2())
    let data = JSON.stringify(noticia)

    return this._http.post(this.url+'/newnews', data, {headers: headersToken})
  }

  editnot(noticia: News): Observable<any>{
    let headersToken = this.headersvar.set('Authorization', this.getToken2())
    let data = JSON.stringify(noticia)

    return this._http.put(this.url+'/editnews/'+noticia._id, data, {headers: headersToken})
  }

  deletnot(id: String): Observable<any>{
    let headersToken = this.headersvar.set('Authorization', this.getToken2())

    return this._http.delete(this.url+'/deletnews/'+id, {headers: headersToken})
  }

  allnot(): Observable<any>{
    return this._http.get(this.url+'/news', {headers: this.headersvar})
  }

  themenot(id: String): Observable<any>{
    return this._http.get(this.url+'/themenews/'+id, {headers: this.headersvar})
  }

  onenot(id: String): Observable<any>{
    return this._http.get(this.url+'/onenews/'+id, {headers: this.headersvar})
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

  getNoti(){
    var token2 = localStorage.getItem('noticia')
    if (token2 !="undefined"){
      this.token =token2
    }else{
      this.token = null
    }
    return this.token;
  }

  getTheme(){
    var token2 = localStorage.getItem('theme')
    if (token2 !="undefined"){
      this.token =token2
    }else{
      this.token = null
    }
    return this.token;
  }
}
