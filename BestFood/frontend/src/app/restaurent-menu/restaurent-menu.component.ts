import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-restaurent-menu',
  templateUrl: './restaurent-menu.component.html',
  styleUrls: ['./restaurent-menu.component.css']
})
export class RestaurentMenuComponent implements OnInit {
  public email: string | null | undefined;
  public resto: any;
  data: any;
  restos: any;
  food: any
  nb = 0;
  token:any;
  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token')

    this.route.paramMap.subscribe(params => {
      const RestaurantEmail = params.get("email");
      this.email = RestaurantEmail

    });

    this.http.get("http://localhost:3000/resto/restaurants").subscribe(res => {

      this.data = res;
      this.restos = this.data.restaurants;
      this.nb = this.restos.length
      for (let i = 0; i < this.nb; i++) {

        if (this.restos[i].email == this.email) {
          this.resto = this.restos[i];
          this.food = this.resto.foods;
          console.log(this.food)
        }
      }
      for(var i = 0; i <this.food.length;i++){
        this.food[i].quantity = 1
        this.food[i].postion = i
        console.log(this.food[i]);
       }
    })


  }

  n = 1;
  
 
   

  
  fod={
    _id:null,
    token:"",
    quantity:""
  
  }
  plus(foods:any) {
    foods.quantity++
    //console.log(foods)
    
  }
  mins(foods:any) {

    if(foods.quantity<=1){
      foods.quantity =1
    }
    else{    
      foods.quantity--
    }


  }

    buy(food:any,id:any){
    
    this.fod._id = id;
    this.fod.token = this.token;
    this.fod.quantity = food.quantity.toString();
    
 
     this.n = 1
     console.log(this.fod)
    this.http.post("http://localhost:3000/cart/cart/",this.fod).subscribe(res=>{
      console.log(res)
    })
  
  }




}




