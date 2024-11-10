import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resto',
  templateUrl: './resto.component.html',
  styleUrls: ['./resto.component.css']
})
export class RestoComponent implements OnInit {

  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.getResto()
  }
  data:any;
  restos:any;
  data1:any;
  public message =""
  public alert = ""
  getResto(){
    this.http.get("http://localhost:3000/resto/restaurants").subscribe(res =>{

      this.data = res;
     this.restos =this.data.restaurants;
     console.log(this.restos);
    })
  }
  delete(_id:any){
    this.http.delete("http://localhost:3000/admin/delResto/"+_id).subscribe(res =>{
      console.log(res)
      this.data1 = res
      this.ngOnInit()
      this.message = this.data1.msg;
      this.alert = "alert alert-success"
    })
   console.log(_id)
  }

}
