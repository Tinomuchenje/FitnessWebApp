import { Component, OnInit } from '@angular/core';
import { AuthService } from './../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  user: any = {};
  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void{
  }

  signIn(username: string, password: string): void{
    this.authService.SignIn(username, password).then((result) => {
        this.router.navigate(['/profile']);
    }).catch((error) => {
      window.alert(error.message);
    });
  }
}
