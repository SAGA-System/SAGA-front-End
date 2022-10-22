import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: User = new User();

  constructor(private AuthService: AuthService) { }

  ngOnInit(): void {
  }

  login(){
    this.AuthService.loginAuth(this.user)
  }

}
