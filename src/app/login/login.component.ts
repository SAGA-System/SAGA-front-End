import { AuthService } from './auth.service';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { User } from './user';
import { DataPage } from '../global/data-page';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isMobile: boolean = DataPage.isMobileDefault;
  isTablet: boolean = DataPage.isMobileDefault;

  @HostListener(DataPage.eventResize, DataPage.eventResizeOptions)
  onResize() {
    this.isMobile = DataPage.isMobile();
    this.isTablet = DataPage.isTablet();
  }

  public user: User = new User();
  @Input() screenWidth = 0;

  typeDummy: string[] = [
    'Aluno',
    'Professor'
  ];

  constructor(private AuthService: AuthService) { }

  ngOnInit(): void {
    this.onResize();
  }

  login(){
    this.AuthService.loginAuth(this.user)
  }

}
