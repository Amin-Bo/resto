import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private router:Router,private http:HttpClient) { }
  data:any;
  data1:any;
  users:any;
  ngOnInit(): void {
    this.getUsers()
  }
  public message =""
  public alert = ""
  getUsers(){
    this.http.get("http://localhost:3000/admin/users").subscribe(res =>{
      console.log(res)
      this.data = res;
     this.users =this.data.users;
     console.log(this.users);
    })
  }
 delete(_id:any){
   this.http.delete("http://localhost:3000/admin/delUser/"+_id).subscribe(res =>{
     console.log(res)
     this.data1 = res
     this.ngOnInit()
     this.message = this.data1.msg;
     this.alert = "alert alert-success"
   })

 }

}
