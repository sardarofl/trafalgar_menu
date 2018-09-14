import { Component, OnInit, ElementRef } from '@angular/core';
import { GetdataService } from '../../services/getdata.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBarModule, MatSnackBar } from '../../../../node_modules/@angular/material';

@Component({
  selector: 'app-femenu',
  templateUrl: './femenu.component.html',
  styleUrls: ['./femenu.component.css']
})
export class FemenuComponent implements OnInit {

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
  item22;

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
  price22;

  constructor(public snackBar:MatSnackBar ,private route:Router, private activatedRouter:ActivatedRoute, private getDataService:GetdataService) { 
  
    setInterval(() => {
      this.refreshEverything();
    }, 10000);
  }

  ngOnInit() {
  
    this.refreshEverything();
  }
  
  openSnackBar() {
    this.snackBar.open('Message archived');
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
      this.item22 = data['item22'];this.price22 = data['price22'];

    });
}

}
