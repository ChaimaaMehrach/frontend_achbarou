import { Component } from '@angular/core';
import { Proprietaire } from '../proprietaire';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  errorMessage: string = '';
  role: any = '';

  constructor(private loginService: LoginService, private router: Router) {}

  login(): void {
    this.loginService.verifyEmailAndPassword(this.email, this.password)
    .subscribe(
      (response) => {
        this.role = response;
      console.log("cc");
      if (this.role === 'Admin') {
        this.router.navigate(['/proprietaire']);
      } else if (this.role === 'Proprietaire') {
        this.router.navigate(['/side2']);
      } else {
        this.errorMessage = 'Invalid role';
      }
    });
      
     
  }
}
