import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.component.html',
  styleUrls: ['./edit-food.component.css']
})
export class EditFoodComponent implements OnInit {

  food: any = {};

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get(`http://localhost:3000/food/food/${id}`).subscribe(res => {
      console.log(res)
    this.food = res;
    });
  }
  onSubmit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.put(`http://localhost:3000/food/food/${id}`, this.food).subscribe(res => {
      this.router.navigate(['/MyMenu']);
    });
  }
}
