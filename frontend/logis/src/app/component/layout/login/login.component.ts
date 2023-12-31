import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../service/servicesUser/services.User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formulario:FormGroup;

  userService = inject(UsersService);
  router = inject(Router);

  constructor(){
    this.formulario  =new FormGroup({
      login : new FormControl(),
      password : new FormControl(),
    })
  }
  async onSubmit(){
    const res = await this.userService.login(this.formulario.value);
    if(!res.error){
     console.log(res);
      localStorage.setItem('user_token',res.token);
      this.router.navigate(['./cotizaciones'])
    }

  console.log(res)
    
  }
}
