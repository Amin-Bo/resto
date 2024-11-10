import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-my-menu',
  templateUrl: './my-menu.component.html',
  styleUrls: ['./my-menu.component.css']
})
export class MyMenuComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }


  token: any;
  restos: any;
  data: any;
  data1: any;
  foods: any;

  resto: any;
  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.data = jwtDecode(this.token);
    this.restos = this.data.restaurant.foods;
   
    this.getAllFood()
  }
  n=0

  nb = 0;
  getAllFood() {
    this.token = localStorage.getItem('token');
    this.data = jwtDecode(this.token);
    this.http.get("http://localhost:3000/resto/restaurants").subscribe(res => {

      this.data1 = res;
      
      this.restos = this.data.restaurant;
      
      this.nb = this.data1.restaurants.length
    
      for (let i = 0; i < this.nb; i++) {
       
        if (this.data1.restaurants[i]._id == this.restos._id) {
        
          this.resto = this.data1.restaurants[i].foods;
         
        }
      }

    })

  }

  public form2 = {
    _id:null,
    token:""
  }
  delete(form2:any,_id:string){
    
    form2.token = localStorage.getItem('token')
    form2._id = _id
    console.log(form2)
    let headers = new HttpHeaders({'token': form2.token,"_id":form2._id})
    console.log(headers);
    this.http.delete("http://localhost:3000/resto/delFood/",{headers:headers}).subscribe(res =>{

      console.log(res)  
      this.ngOnInit()
    });

   
  }
}
