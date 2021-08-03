import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-navbar1',
  templateUrl: './navbar1.component.html',
  styleUrls: ['./navbar1.component.scss'],
  providers: [UserService]
})
export class Navbar1Component implements OnInit {
  public identidad;
  public token;

  constructor(public _usuarioService: UserService, private _router: Router) { 
    this.token = this._usuarioService.getToken2()
    this.identidad = this._usuarioService.getIdentidad()
  }

  ngOnInit(): void {
  }

  logout(){
    localStorage.clear()
    this._router.navigate(['/login'])
  }

  theme(num: Number){
    switch (num){
      case 1:{
        this._router.navigate(['/principal'])
        break;
      }
      case 2:{
        localStorage.setItem("theme", 'Profile')
        this._router.navigate(['/profile'])
        break;
      }
      case 3:{
        localStorage.setItem("theme", 'Política')
        this._router.navigate(['/noticias'])
        break;
      }
      case 4:{
        localStorage.setItem("theme", 'Social')
        this._router.navigate(['/noticias'])
        break;
      }
      case 5:{
        localStorage.setItem("theme", 'Deportes')
        this._router.navigate(['/noticias'])
        break;
      }
      case 6:{
        localStorage.setItem("theme", 'Economía')
        this._router.navigate(['/noticias'])
        break;
      }
      case 7:{
        localStorage.setItem("theme", 'Cultural')
        this._router.navigate(['/noticias'])
        break;
      }
      case 8:{
        localStorage.setItem("theme", 'Farándula')
        this._router.navigate(['/noticias'])
        break;
      }
      case 9:{
        localStorage.setItem("theme", 'Ciencias')
        this._router.navigate(['/noticias'])
        break;
      }
      case 10:{
        localStorage.setItem("theme", 'NewNews')
        this._router.navigate(['/crearnoticia'])
        break;
      }
      case 11:{
        localStorage.setItem("theme", 'Users')
        this._router.navigate(['/users'])
        break;
      }
      default: { 
        this._router.navigate(['/principal'])
        break; 
     }
    }
  }
}
