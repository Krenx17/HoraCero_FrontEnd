import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News } from 'src/app/modelos/noticia.model';
import { NoticiaService } from 'src/app/servicios/noticia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
  providers: [NoticiaService]
})
export class PrincipalComponent implements OnInit {
  public noti: News;
  public noticia: any;
  public idNoti: any;

  constructor(private _notiService: NoticiaService ,private _router: Router) { 
    this.noti = new News('', '', '', '', '', '', '', '')
  }

  ngOnInit(): void {
    this.news()
  }
  
  news(){
    this._notiService.allnot().subscribe(
      response =>{
        this.noticia = response.noticias;
      },error =>{
        console.log(<any>error);
      }
    )
  }

  idNews(id: String){
    this.idNoti = id;
    localStorage.setItem('noticia', this.idNoti)
    this._router.navigate(['/noticia'])
  }
}
