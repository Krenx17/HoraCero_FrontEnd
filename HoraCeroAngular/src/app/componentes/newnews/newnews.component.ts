import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News } from 'src/app/modelos/noticia.model';
import { GeneroService } from 'src/app/servicios/genero.service';
import { NoticiaService } from 'src/app/servicios/noticia.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-newnews',
  templateUrl: './newnews.component.html',
  styleUrls: ['./newnews.component.scss']
})
export class NewnewsComponent implements OnInit {
  public temas: any;
  public noti: News

  constructor(public _themeService: GeneroService, private _notiService: NoticiaService ,private _router: Router) { 
    this.noti = new News('', '', '', '', '', '', '', '')
  }

  ngOnInit(): void {
    this.themes()
  }

  themes(){
    this._themeService.allthemes().subscribe(
      response =>{
        this.temas = response.generos;
      },error =>{
        console.log(<any>error);
      }
    )
  }

  crear(){
    this._notiService.newnot(this.noti).subscribe(
      response=>{
        this._router.navigate(['/principal'])
      },err=>{
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'No se pudo guardar el usuario',
          showConfirmButton: false,
          timer: 1500
        })
      }
    )
  }
}
