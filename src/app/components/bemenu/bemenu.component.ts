
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
import { AuthenticationService } from '../.././services/authentication.service';
import { Location } from '../../../../node_modules/@angular/common';

@Component({
  selector: 'app-bemenu',
  templateUrl: './bemenu.component.html',
  styleUrls: ['./bemenu.component.css']
})
export class BemenuComponent implements OnInit {

  title = 'app';
  isLoggednIn = false;

  constructor(location:Location,private router:Router,private activatedRouter:ActivatedRoute,  private authenticationService:AuthenticationService) { 
    if(authenticationService.loggedIn()){
      this.isLoggednIn= true;
      console.log(this.isLoggednIn)
    }

    location.subscribe(val => console.log(val));

  }
  ngOnInit() {
  }

  onLogout(){
    this.authenticationService.logout().subscribe(data =>{

      localStorage.removeItem('menuToken');
      this.router.navigateByUrl('/bemenu/login');
    })
  }

  routeChanged(){
    console.log("working");
    if(this.authenticationService.loggedIn()){
      this.isLoggednIn= true;
      console.log(this.isLoggednIn)
    }else{
      this.isLoggednIn= false;
    }
  }
}
