import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-restaurent-profil',
  templateUrl: './restaurent-profil.component.html',
  styleUrls: ['./restaurent-profil.component.css']
})
export class RestaurentProfilComponent implements OnInit {

  constructor() { }
  token: any;
  resto: any;
  data: any;

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.data = jwtDecode(this.token);
    this.resto = this.data.restaurant;
    console.log(this.resto);
  }
}


