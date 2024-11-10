import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-restaurent-login',
  templateUrl: './restaurent-login.component.html',
  styleUrls: ['./restaurent-login.component.css']
})
export class RestaurentLoginComponent implements OnInit {

  constructor(service:DataServiceService ,private http:HttpClient, private router:Router) {}
  data:any;
  token:any;
  resto:any;

  ngOnInit(): void {
   
  }
  public form = {
    email:null,
    password:null
  }  
  public message =""
  public alert = ""

  login(form:any){
    this.http.post("http://localhost:3000/resto/login/",form).subscribe(res=>{
      this.data = res;
      this.token = this.data.token;
     const headers =new Headers();
     headers.append('Authorization', `jwt ${this.token}`);
     localStorage.setItem('token',this.token);
        this.token = localStorage.getItem('token');
        this.resto = jwtDecode(this.token);
        console.log(this.resto);

        // redirect after login
        if(this.token !=null){
           this.router.navigate((['/RestaurentProfil']))
         }
         
  
    }
  );
    if(this.token == undefined){
      this.message ="plz check you information"
      this.alert="alert alert-danger"
    }
  console.log(this.token)

 
  
  }
}
