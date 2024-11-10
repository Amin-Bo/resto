import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {

  constructor(private http: HttpClient) { }
  data:any;
  token:any;
  user:any;
  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.data = jwtDecode(this.token);
    this.form = this.data.restaurant;
    this.form.password = null
  }

  public form = {
    name:null,
    phone:null,
    position:null,
    email:null,
    cover:null,
    logo:null,
    password:null,
    token:null
  }
  public form2 ={
    cpassword:null
  }
  public message =""
  public alert = ""
  update(form: any) {
    form.token = localStorage.getItem('token');
     console.log(this.form)
     
    this.http.post("http://localhost:3000/resto/update/", form).subscribe(res => {
      localStorage.removeItem('token');
      this.data = res;
      this.token = this.data.token;     

      localStorage.setItem('token', this.data.token);
      this.token = localStorage.getItem('token');

      console.log(this.data.success);
      if(this.data.success == true){
        this.message="restaurant updated successfully!"
        this.alert = "alert alert-success"
      }else{
        this.message="something went wrong!"
        this.alert = "alert alert-danger"
      }
    }


    );


  }

}
