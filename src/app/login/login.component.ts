import { AuthService } from './auth.service';
import { Component, Input, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: User = new User();
  @Input() screenWidth = 0;

  typeDummy: string[] = [
    'Aluno',
    'Professor'
  ];

  constructor(private AuthService: AuthService) { }

  ngOnInit(): void {
  }

  login(){
    this.AuthService.loginAuth(this.user)
  }

}
