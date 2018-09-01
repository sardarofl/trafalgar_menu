import { Component, OnInit, ElementRef } from '@angular/core';
import { AdddataService } from '../../services/adddata.service';
import { isNgTemplate } from '../../../../node_modules/@angular/compiler';
import { GetdataService } from '../../services/getdata.service';
import { AuthenticationService } from '../../services/authentication.service';
import { Route, Router } from '../../../../node_modules/@angular/router';
declare var $ :any;
@Component({
  selector: 'app-menudata',
  templateUrl: './menudata.component.html',
  styleUrls: ['./menudata.component.css']
})
export class MenudataComponent implements OnInit {
  
  item1;
  item2;
  item3;
  item4;
  item5;
  item6;
  item7;
  item8;
  item9;
  item10;
  item11;
  item12;
  item13;
  item14;
  item15;
  item16;
  item17;
  item18;
  item19;
  item20;
  item21;

  price1;
  price2;
  price3;
  price4;
  price5;
  price6;
  price7;
  price8;
  price9;
  price10;
  price11;
  price12;
  price13;
  price14;
  price15;
  price16;
  price17;
  price18;
  price19;
  price20;
  price21;

  isLoggednIn = false;


  constructor(private router:Router, private getDataService:GetdataService, private addDataService:AdddataService, private elem: ElementRef, private authenticationService:AuthenticationService) { 
    if(authenticationService.loggedIn()){
      this.isLoggednIn= true;
    }else{
      this.router.navigate(['/bemenu/login'])
    }

  }

  ngOnInit() {
    this.refreshEverything();
  }

  refreshEverything = () => {
      this.getDataService.getMenu(`/api/menus/5b894c834a9fad43c4b0a67e`).map(response => response.json()).subscribe(data =>{
        console.log(data);

        this.item1 = data['item1'];this.price1 = data['price1'];
        this.item2 = data['item2'];this.price2 = data['price2'];
        this.item3 = data['item3'];this.price3 = data['price3'];
        this.item4 = data['item4'];this.price4 = data['price4'];
        this.item5 = data['item5'];this.price5 = data['price5'];
        this.item6 = data['item6'];this.price6 = data['price6'];
        this.item7 = data['item7'];this.price7 = data['price7'];
        this.item8 = data['item8'];this.price8 = data['price8'];
        this.item9 = data['item9'];this.price9 = data['price9'];
        this.item10 = data['item10'];this.price10 = data['price10'];
        this.item11 = data['item11'];this.price11 = data['price11'];
        this.item12 = data['item12'];this.price12 = data['price12'];
        this.item13 = data['item13'];this.price13 = data['price13'];
        this.item14 = data['item14'];this.price14 = data['price14'];
        this.item15 = data['item15'];this.price15 = data['price15'];
        this.item16 = data['item16'];this.price16 = data['price16'];
        this.item17 = data['item17'];this.price17 = data['price17'];
        this.item18 = data['item18'];this.price18 = data['price18'];
        this.item19 = data['item19'];this.price19 = data['price19'];
        this.item20 = data['item20'];this.price20 = data['price20'];
        this.item21 = data['item21'];this.price21 = data['price21'];
   
      });
  }
  
  public submitmenudata(): void{

    console.log("menu set")

    const menudata = 
      {item1:this.item1 , price1:this.price1, 
      item2:this.item2 , price2:this.price2,
      item3:this.item3 , price3:this.price3,
      item4:this.item4 , price4:this.price4,
      item5:this.item5 , price5:this.price5,
      item6:this.item6 , price6:this.price6,
      item7:this.item7 , price7:this.price7,
      item8:this.item8 , price8:this.price8,
      item9:this.item9 , price9:this.price9,
      item10:this.item10 , price10:this.price10,
      item11:this.item11 , price11:this.price11,
      item12:this.item12 , price12:this.price12,
      item13:this.item13 , price13:this.price13,
      item14:this.item14 , price14:this.price14,
      item15:this.item15 , price15:this.price15,
      item16:this.item16 , price16:this.price16,
      item17:this.item17 , price17:this.price17,
      item18:this.item18 , price18:this.price18,
      item19:this.item19 , price19:this.price19,
      item20:this.item20 , price20:this.price20,
      item21:this.item21 , price21:this.price21
       
    }
      
    let id= '5b894c834a9fad43c4b0a67e';
    this.addDataService.setMenu(`/api/menus/${id}`, menudata).subscribe(data =>{
      console.log(data);
      this.refreshEverything();
    })


    console.log(menudata);
      
}

}
