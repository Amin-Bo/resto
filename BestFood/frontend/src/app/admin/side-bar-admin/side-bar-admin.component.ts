import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-side-bar-admin',
  templateUrl: './side-bar-admin.component.html',
  styleUrls: ['./side-bar-admin.component.css']
})
export class SideBarAdminComponent implements OnInit {

  constructor(private router:Router    ) { }
  user:any;
  token:any
  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.user = jwtDecode(this.token);
    console.log(this.token);
    console.log(this.user.user);
  }
  public check =true
  public toggle(){
    if(this.check==true){
      this.check=false
    }
    else{
      this.check=true
    }

  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }
}
