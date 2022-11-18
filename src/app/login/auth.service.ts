import { Router } from '@angular/router';
import { EventEmitter, Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 userAuth: boolean = false
 showMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  loginAuth(user: User) {
    if (user.rm === '123456' &&
      user.password === '123456') {
      this.userAuth = true;
      this.showMenuEmitter.emit(true);
      this.router.navigate(['inicio'])
    } else {
      this.userAuth = false;
      this.showMenuEmitter.emit(false);
    }
  }
}
