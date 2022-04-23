import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = true
  constructor() { }

  checkIsLoggedIn(): Promise<boolean> {
    return new Promise(resolve=> {
      setTimeout(()=> {
        resolve(this.isLoggedIn)
      }, 0)
    })
  }
}
