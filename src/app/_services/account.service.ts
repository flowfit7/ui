import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
    url = 'http://localhost:50546/api'

  constructor(private http: HttpClient) { }

  login(model: any) {
    console.log(this.url + '/Authenticate/login')
      return this.http.post(this.url + '/Authenticate/login', model)
  }
}
