import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { DataServiceService } from '../service/data-service.service';

@Component({
  selector: 'app-nav-rest',
  templateUrl: './nav-rest.component.html',
  styleUrls: ['./nav-rest.component.css']
})
export class NavRestComponent implements OnInit {

  constructor(private service:DataServiceService, private router:Router) { }


  token : any;
  resto : any;
  data :any;
  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.data = jwtDecode(this.token);
    this.resto = this.data.restaurant;
    console.log(this.resto);
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/RestaurentLogin'])
  }
}
