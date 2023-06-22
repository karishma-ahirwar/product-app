import { Component } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string ='';
  password: string ='';

 
  constructor(private apiService: ApiService) { }

  login() {
    this.apiService.login(this.email, this.password).subscribe(
      response => {
        // Handle successful login, e.g., store user token, navigate to home page
      },
      error => {
        // Handle login error, e.g., show error message
      }
    );
  }
}