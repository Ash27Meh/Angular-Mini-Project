import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username:string;
  password:string;
  constructor(private router:Router){
    this.username="";
    this.password="";
  }
  login(){
    if(this.username.toLowerCase()=="admin" && this.password=="Admin@123")
    {
        this.router.navigate(['/dashboard']);
        localStorage.setItem("IsAuthorized","true");
        localStorage.setItem('IsAdmin',"true");
        
    }
    else if(this.username.toLowerCase()=="ashik" && this.password=="Ashik@123")
    {
      this.router.navigate(['/dashboard']);
      localStorage.setItem("IsAuthorized","true");
    }
  }
}
