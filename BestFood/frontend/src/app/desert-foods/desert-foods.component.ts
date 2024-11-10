import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-desert-foods',
  templateUrl: './desert-foods.component.html',
  styleUrls: ['./desert-foods.component.css']
})
export class DesertFoodsComponent implements OnInit {

  constructor(private router:Router,private http:HttpClient) { }
  token:any;
  ngOnInit(): void {
    this.token = localStorage.getItem('token')
    this.getAllFood()
  }
  data :any;
  foods:any;
  foodDiet:any= [];
  j = 0;
  getAllFood(){
    this.http.get("http://localhost:3000/food/foods").subscribe(res =>{
      
      this.data = res;
     this.foods =this.data.food;
     for(var i=0; i<this.foods.length;i++){
      this.foods[i].quantity = 1
      this.foods[i].postion = i
      if(this.foods[i].category == "desert"){
        console.log(this.foods[i])
        this.foodDiet[this.j] = this.foods[i]
        this.j++;
      }

    }
    });

  }
   n = 1;
  fd = {
    _id: "",
    qte: 0
  }

  fod={
    _id:null,
    token:"",
    quantity:""
  
  }
  plus(food:any) {
    
    
    food.quantity++
    console.log(food)
    
  }
  mins(food:any) {

    if(food.quantity<=1){
      food.quantity =1
    }
    else{food.quantity--}
    


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

