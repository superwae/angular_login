import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {

  }

  login(name: string, password: string) {
    return name === "username" && password === "password";
  }

  PostUser(name: string, password: string) {
    return this.http.post('https://localhost:7257/api/Login/Token', {
      name, password
    });
  }
}
