import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurent',
  templateUrl: './restaurent.component.html',
  styleUrls: ['./restaurent.component.css']
})
export class RestaurentComponent implements OnInit {

  constructor(private router:Router,private http:HttpClient) { }
  p1="REST"
  p2="AURENTS"
  ngOnInit(): void {
    this.getResto()
  }
  data:any;
  restos:any;

  getResto(){
    this.http.get("http://localhost:3000/resto/restaurants").subscribe(res =>{
      
      this.data = res;
     this.restos =this.data.restaurants;
     console.log(this.restos);
    })
  }

}
