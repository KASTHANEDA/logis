import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../service/servicesUser/services.User';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  router = inject(Router);
  userServices = inject(UsersService)

  onClickLogout(){
    localStorage.removeItem('user_token');
    this.router.navigate(['/login']);
  }

}
