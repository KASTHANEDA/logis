import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../service/servicesUser/services.User';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  router = inject(Router);

  formulario: FormGroup;

  userService = inject(UsersService)
/*  {
    "nombre": "Miguel",
    "apellido": "Lara",
    "edad": 33,
    "login": "miguellara666",
    "password": "123",
    "email": "miguel@example.com",
    "estado": "inactivo",
    "perfil": "usuario"
  }
  */
  constructor(){
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      apellido: new FormControl(),
      edad: new FormControl(), 
      login: new FormControl(), 
      password: new FormControl(), 
      email: new FormControl(), 
      perfil: new FormControl(), 
    })
  }

  async onSubmit(){
    const res = await this.userService.register(this.formulario.value);
    console.log(res)
    this.router.navigate(['/login']);
  }


 
}
