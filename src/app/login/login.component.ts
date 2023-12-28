import { Component, OnInit } from '@angular/core';
import { SignupserviceService } from '../Services/signupservice.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private service:SignupserviceService) {}
  dataitem:any={};
  backdata:any={};
  element:any={};
  msg:any;
  ngOnInit(): void {
   
  }

  getdata(login:NgForm)
  {
    this.service.getdata(login.value).subscribe(data=>{
     
      console.log(data);
      this.backdata=data;
      for (let index = 0; index < this.backdata.length; index++) {
         this.element = this.backdata[index];
         console.log(this.element.password);
         console.log(this.dataitem.password);
         console.log(this.element.email);
         console.log(this.dataitem.email);
         
      if(this.element.email==this.dataitem.email&&this.element.password==this.dataitem.password)
      {
        alert("Successful");
        
        break;
      }
      else{
         this.msg = "Worng invalid userid/password";
      }
    }
    },
    (Error:any)=>
    {
      console.log(Error);
    }
    )
  }

}
