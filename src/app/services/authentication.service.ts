import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthenticationService {
  authToken:any;
  user:any;

  constructor(private http:HttpClient) {

  }
  registerUser(user){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post('/api/users/register', user,{headers:headers})

  }

  login(user){
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post('/api/users/login', user,{headers:headers});
    //;
  }

  getProfile(){
    let headers = new HttpHeaders();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('/users/profile',{headers:headers})

  }

  isAdmin(){
      let headers = new HttpHeaders();
      this.loadToken();
      headers.append('Authorization', this.authToken);
      headers.append('Content-Type', 'application/json');
      return this.http.get('/users/profile',{headers:headers})

  }

  loggedIn(){
    return localStorage.getItem('menuToken') ? true:false;
  }

  storeUserData(token, user){
    localStorage.setItem('id_token',token);
    localStorage.setItem('user',JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;

  }

  logout(){
    // this.authToken = null;
    // this.user = null;
    // localStorage.clear();
    let accessToken;
    if(localStorage.getItem('menuToken')){
      accessToken = JSON.parse(localStorage.getItem('menuToken')).id;
    }
    console.log(accessToken);
    return this.http.post(`/api/users/logout?access_token=${accessToken}`, {});
  }

}
