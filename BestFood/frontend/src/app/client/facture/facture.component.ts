import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {
public name ="ahmed"
public date = new Date()
  
constructor(private service:DataServiceService, private router:Router,private http: HttpClient) { }
  token : any;
  user : any;
  data :any;
  TVA=5;
  n=1;

  public form = {
    _id: null,
    token: ""
  }
  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.data = jwtDecode(this.token);
    this.user = this.data.user;
    //console.log(this.user);
    this.getbasket(this.form)
  }




  datas: any;
  carts: any;
  total = 0
  prix = 0
  getbasket(form: any) {
    form.token = localStorage.getItem('token')
    let headers = new HttpHeaders({ 'token': form.token })

    console.log(headers)
    this.http.get("http://localhost:3000/cart/cart", { headers: headers }).subscribe(res => {
      this.datas = res;
      this.carts = this.datas.cart;
      console.log(this.carts)

      for (let i = 0; i < this.carts.length; i++) {
        this.prix = parseFloat(this.carts[i].order.price)
        this.total += this.prix * this.carts[i].quantity

      }
      console.log(this.total)
    })

  }
  
}
