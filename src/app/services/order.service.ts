import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class OrderService {
  
  constructor(private _http:Http) { }

  getOrders(){
    return this._http.get('api/orders')
    .map(res=>res.json());
  }
}
