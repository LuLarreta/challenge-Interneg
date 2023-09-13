import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    const apiUrl = 'https://interneg.ddns.net/api-challenge'; 
    const credentials = { username: this.username, password: this.password };

    this.http.post(apiUrl + '/login', credentials).subscribe(
      (response: any) => {
        if (response.ATO) {
          localStorage.setItem('access_token', response.ATO);
          this.router.navigate(['/']);
  
        }
      },
      (error) => {
        alert('Error al iniciar sesión');
      }
    );
  }
}