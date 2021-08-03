import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/modelos/user.model';
import { UserService } from 'src/app/servicios/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
  providers: [UserService]
})
export class UsuariosComponent implements OnInit {
  public user: User;
  public usuarios: any;
  public token: any;

  constructor(private _userService: UserService, private _router: Router) { 
    this.user = new User('', '', '', '', '', '', '')
  }

  ngOnInit(): void {
    this.users()
  }

  users(){
    this._userService.alluser().subscribe(
      response =>{
        this.usuarios = response.obtainedUsers;
      },error =>{
        console.log(<any>error);
      }
    )
  }

  editUser(){
    this._userService.edituser(this.user).subscribe(
      response =>{
        this.users()
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
        this.users()
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

  oneUser(idUser: String){
    this._userService.profile(idUser).subscribe(
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

  newuser(){
    this._userService.user(this.user).subscribe(
      response=>{
        this.users()
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
