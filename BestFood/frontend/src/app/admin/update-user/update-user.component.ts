import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute,
  ) { }

  data: any;
  data1: any
  token: any;
  user: any;
  public form = {
    id: null,
    lastName: null,
    firstName: null,
    phone: null,
    email: null,
    password: null,
    token: null
  }
  public forme = {
    cpassword: null

  }
  public message = ""
  public alert = ""
  _id: any
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let userId = params.get("_id");
      this._id = userId;
      this.getUserById(this._id);
      console.log(userId)

    });

  }
  getUserById(userId: string) {
    this.http.get("http://localhost:3000/admin/user/" + userId).subscribe(res => {
      console.log(res)
      this.data = res
      this.form = this.data.user;
      this.form.password = null
    })
  }
  update(form: any) {

    console.log(form)
    this.http.post("http://localhost:3000/admin/updateUser/" + form._id, form).subscribe(res => {
      console.log(res);
      this.data1 = res
      this.message = this.data1.msg
      this.alert = "alert alert-success"
    }


    );

  }
}
