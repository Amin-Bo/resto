import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.food.token = this.token;
  }
  token:any;

  data:any;
  food = {
    name:null,
    price:null,
    img: null,
    category:"other",
    token:null
  }
  public message =""
  public alert = ""

  addFood(food:any){
    this.http.post("http://localhost:3000/food/food/",food).subscribe(res =>{
      console.log(res)
      this.data =res

      if(this.data.message == "Food saved successfully"){
        this.food.category = ""
        this.food.price = null
        this.food.img = null
        this.food.name = null
        this.message = "Food saved successfully"
        this.alert = "alert alert-success"
      }
    })
  }
}
