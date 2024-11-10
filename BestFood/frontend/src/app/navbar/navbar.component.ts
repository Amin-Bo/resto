import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  imgPath = "../img/logo.png";
  url="/Register";
  constructor( private service:DataServiceService, private router:Router,private http: HttpClient) { }
  token : any;
  user : any;
  data :any;
  data1:any;
  n:any
  public form = {
    _id:null,
    token:""
  }

  carts:any;
  total=0
  ngOnInit(): void {
    this.getbasket(this.form)
    this.token = localStorage.getItem('token');
    this.data = jwtDecode(this.token);
    this.user = this.data.user;
    console.log(this.user);
    
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }
  getbasket(form:any){
    form.token = localStorage.getItem('token')
    let headers = new HttpHeaders({'token': form.token})

    console.log(headers)
    this.http.get("http://localhost:3000/cart/cart",{headers:headers}).subscribe(res=>{
      this.data1 = res;
      this.n = this.data1.cart.length;
    })

  }
}
