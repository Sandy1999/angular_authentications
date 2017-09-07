import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {

  constructor(private _http:Http) { }
  
  login(credentials){
    return this._http.post('/api/authenticate',JSON.stringify(credentials))
    .map(res=>{
      let result = res.json();
      if(result && result.token){
        localStorage.setItem('token',result.token);
        return true;
      }

      return false;
    });
  }

  logout(){
    localStorage.removeItem('token');
    this.isLoggedin();
  }

  isLoggedin(){
    return tokenNotExpired()
  }
}
