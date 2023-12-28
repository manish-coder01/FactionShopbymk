import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupserviceService {

  constructor(private http:HttpClient) { }

  insert(data:any)
  {
    return this.http.post("http://localhost:8081/signup/save",data);
  }

  getdata(data:any)
  {
    return this.http.get("http://localhost:8081/signup/getdata",data);
  }
  
}
