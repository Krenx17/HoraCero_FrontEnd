import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coment } from 'src/app/modelos/comentario.model';
import { News } from 'src/app/modelos/noticia.model';
import { ComentarioService } from 'src/app/servicios/comentario.service';
import { GeneroService } from 'src/app/servicios/genero.service';
import { NoticiaService } from 'src/app/servicios/noticia.service';
import { UserService } from 'src/app/servicios/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
  providers: [NoticiaService]
})
export class NoticiaComponent implements OnInit {
  public temas: any;
  public noti: News;
  public coment: Coment;
  public comentarios: any;

  constructor(public _themeService: GeneroService, 
              public _comentService: ComentarioService,
              public _userService: UserService, 
              public _newsService: NoticiaService, 
              private _router: Router) { 
    this.noti = new News('', '', '', '', '', '', '', ''),
    this.coment = new Coment('', '', '', '', '', '') 
  }

  ngOnInit(): void {
    this.themes()
    this.noticia()
    this.coments()
  }
  
  noticia(){
    this._newsService.onenot(this._newsService.getNoti()).subscribe(
      response =>{
        this.noti = response.noti
      },error =>{
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

  editNoti(){
    this._newsService.editnot(this.noti).subscribe(
      response =>{
        this.noticia()
      }, err =>{
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'No puedes editar a un administrador',
          showConfirmButton: false,
          timer: 1500
        })
      }
    )
  }

  deletNoti(idNoti: String){
    this._newsService.deletnot(idNoti).subscribe(
      response =>{
        this.noticia()
      }, err =>{
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'No puedes editar a un administrador',
          showConfirmButton: false,
          timer: 1500
        })
      }
    )
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

  coments(){
    this._comentService.allcom().subscribe(
      response =>{
        this.comentarios = response.coments;
      },error =>{
        console.log(<any>error);
      }
    )
  }

  newCom(){
    this._comentService.newcom(this.coment).subscribe(
      response=>{
        this.coments()
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

  editCom(){
    this._comentService.editcom(this.coment).subscribe(
      response =>{
        this.coments()
      }, err =>{
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'No puedes editar a un administrador',
          showConfirmButton: false,
          timer: 1500
        })
      }
    )
  }

  deletCom(idCom: String){
    console.log(idCom)
    this._comentService.deletcom(idCom).subscribe(
      response =>{
        this.coments()
      }, err =>{
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'No puedes editar a un administrador',
          showConfirmButton: false,
          timer: 1500
        })
      }
    )
  }

  onecom(id: String){
    this._comentService.onecom(id).subscribe(
      response =>{
        this.coment = response.coment
      },error =>{
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'No se pudo encontrar al usuario',
          showConfirmButton: false,
          timer: 1500
        })
      }
    )
  }
}
