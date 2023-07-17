import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth-services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";

  constructor(private authService: AuthService, private router: Router) {
  }

  loginGo() {
    this.authService.PostUser(this.username, this.password).subscribe(
      (result: any) => {
        const token = result;

        console.log({ username: this.username, password: this.password, access_token: token.access_token })

        localStorage.setItem("token", token.access_token)
        this.router.navigate(['/posts']);
      },
      (err) => {
        console.error("didnt work: ", err)

      }
    )
  }

  ngOnInit() {
  }
}