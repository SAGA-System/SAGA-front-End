import { AuthService } from './login/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SAGA';

  isSideNavCollapsed = false;
  screenWidth = 0;

  showMenu: boolean = false;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  constructor(private authService: AuthService, private router: Router){

  }

  ngOnInit(): void {
    this.authService.showMenuEmitter.subscribe(
      show => this.showMenu = show
    );
    this.router.navigate(['login'])
  }
}
