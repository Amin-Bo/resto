import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  p1="OUR"
  p2="MENU"
  all = true;
  dis = false;
  die = false;
  click(){
this.p2 ="MENU"
    
    
  }
  click1(){
this.p2 ="DIETS"
  }
  click2(){
    this.p2 ="DESERTS"
  }

}
