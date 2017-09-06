import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {

  constructor(private _http:Http) { }
  
  login(credentials){
    return this._http.post('/api/authenticate',JSON.stringify(credentials));
  }

  logout(){}

  isLoggedin(){
    return false;
  }
}
