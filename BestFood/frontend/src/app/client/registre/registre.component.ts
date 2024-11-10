import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgModule  } from '@angular/core';
@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {

  public form = {
    lastName:null,
    firstName:null,
    phone:null,
    email:null,
    password:null,
  }
  

  constructor( private http:HttpClient) {
   }

  ngOnInit(): void {


  }

  register(form:any){
    this.http.post("http://localhost:3000/user/register/",form).subscribe(res=>{
      
        console.log(res);
    }
  );
  }

}
