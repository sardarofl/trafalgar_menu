import { Injectable } from '@angular/core';
import {Http} from '@angular/http';


import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { HttpHeaders,HttpClient, HttpClientModule } from '../../../node_modules/@angular/common/http';
import {  } from '../../../node_modules/@types/selenium-webdriver/http';

@Injectable()
export class AdddataService {

  constructor(private http:HttpClient) { }

  setMenu(url,data){
     //let _url:string = "/api/menus";
     console.log(url, data);
     const headers = new HttpHeaders ({
       'Content-type' : 'application/json'
     });
     return this.http.put(url,data,{headers:headers});
     
   }

   _errorHandler(error: Response){
     console.error('Error occured: ' +error);
     return Observable.throw(error||'some error on server occured');
   }
}
