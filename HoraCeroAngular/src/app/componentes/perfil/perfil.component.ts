import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/modelos/user.model';
import { UserService } from 'src/app/servicios/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  providers: [UserService]
})
export class PerfilComponent implements OnInit {
  public user: User;
  public usuarios: any;
  public identidad;

  constructor(public _userService: UserService, private _router: Router) { 
    this.identidad = this._userService.getIdentidad()
    this.user = new User('', '', '', '', '', '', '')
  }

  ngOnInit(): void {
    this.oneUser()
  }

  editUser(){
    this._userService.edituser(this.user).subscribe(
      response =>{
        this.oneUser()
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

  deleteUser(idUser: String){
    this._userService.deletuser(idUser).subscribe(
      response =>{
        //
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

  oneUser(){
    this._userService.profile(this.identidad._id).subscribe(
      response =>{
        this.user = response.obtainedUser
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
