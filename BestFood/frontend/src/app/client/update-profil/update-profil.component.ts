import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-profil',
  templateUrl: './update-profil.component.html',
  styleUrls: ['./update-profil.component.css']
})
export class UpdateProfilComponent implements OnInit {


 

  data:any;
  token:any;
  user:any;
  public form = {
    lastName:null,
    firstName:null,
    phone:null,
    email:null,
    password:null,
    token:null
  }
  public forme = {
    cpassword:null

  }
  
  constructor(private http:HttpClient) { }

  ngOnInit(): void {

 this.token = localStorage.getItem('token');
      this.user = jwtDecode(this.token);
      this.form = this.user.user;
      this.form.password=null;

  }
  update(form:any){
    form.token=localStorage.getItem('token');
  //  console.log(form)
    this.http.post("http://localhost:3000/user/update/",form).subscribe(res=>{
      localStorage.removeItem('token');
      this.data = res;
      this.token = this.data.token;

        localStorage.setItem('token',this.data.token);
        this.token = localStorage.getItem('token');
        //this.user = jwtDecode(this.token);
       // console.log(res);
        }


);

  }
}