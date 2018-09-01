import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-bemenu',
  templateUrl: './bemenu.component.html',
  styleUrls: ['./bemenu.component.css']
})
export class BemenuComponent implements OnInit {

  isLoggednIn= false;

  constructor(private authenticationService:AuthenticationService) { }

  ngOnInit() {
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
