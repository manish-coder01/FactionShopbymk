import { Component, OnInit } from '@angular/core';
import { SignupserviceService } from '../Services/signupservice.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{

  dataitem:any={};

  constructor(private service:SignupserviceService) {}
  ngOnInit(): void {
    
  }
 
  savedata(signupform:NgForm)
  {
    this.service.insert(signupform.value).subscribe(data=>{
      signupform.reset();
      console.log(data);
    },
    (Error:any)=>
    {
      console.log(Error);
    }
    )
  }

}
