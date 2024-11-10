import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http:HttpClient ){ }

  login(data:any){
    this.http.post("http://localhost:3000/user/login/",data)
  }

  profil(token:any){
    this.http.get("http://localhost:3000/user/profil/",token)
  }
}
