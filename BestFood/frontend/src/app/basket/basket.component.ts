import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }


  public form = {
    _id: null,
    token: ""
  }
  ngOnInit(): void {


    this.getbasket(this.form)
  }
  data: any;
  carts: any;
  total = 0
  prix = 0
  getbasket(form: any) {
    form.token = localStorage.getItem('token')
    let headers = new HttpHeaders({ 'token': form.token })

    console.log(headers)
    this.http.get("http://localhost:3000/cart/cart", { headers: headers }).subscribe(res => {
      this.data = res;
      this.carts = this.data.cart;
      console.log(this.carts)

      for (let i = 0; i < this.carts.length; i++) {
        this.prix = parseFloat(this.carts[i].order.price)
        this.total += this.prix * this.carts[i].quantity

      }
      console.log(this.total)
    })

  }
  public form2 = {
    _id: null,
    token: ""
  }
  deleteFromCart(form2: any, _id: string) {

    form2.token = localStorage.getItem('token')
    form2._id = _id
    let headers = new HttpHeaders({ 'token': form2.token, "_id": form2._id })
    console.log(headers);
    this.http.delete("http://localhost:3000/cart/cart/", { headers: headers }).subscribe(res => {

      console.log(res)

    });
    this.reloadCurrentRoute()

  }
  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate(["basket"]);
        console.log("basket");
    });
  }


}


