import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '../../../../node_modules/@angular/router';
import { MenudataComponent } from '../menudata/menudata.component';

@Component({
  selector: 'app-menulogin',
  templateUrl: './menulogin.component.html',
  styleUrls: ['./menulogin.component.css']
})
export class MenuloginComponent implements OnInit {

  email;
  password;

  constructor(private router:Router, private authService:AuthenticationService) { 
    if(authService.loggedIn()){
      this.router.navigate(['/bemenu/menudata'])
    }
  }

  ngOnInit() {
  }

  login(){
    const userData = {
      email:this.email,
      password:this.password
    }

    this.authService.login(userData).subscribe(data =>{
      console.log(data);
      localStorage.setItem('menuToken', JSON.stringify(data));
      if(this.authService.loggedIn())
      {
        console.log('logged in')
        this.router.navigate(['/bemenu/menudata'])
      }
      
    }, err =>{
      alert("wrong email or password");
    })

  }

}
