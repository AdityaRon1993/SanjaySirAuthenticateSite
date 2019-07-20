import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticate : AuthenticationService, 
    private route : Router) { }
  status
  ngOnInit() {
  }
  Login(user,password){
      this.authenticate.validate(user,password);
    this.authenticate.currentLoginStatus.subscribe(res=>{
      this.status=res;
      this.resultStatus(this.status)
    })
    

  }
  resultStatus(a){
    if(a){
      this.route.navigate(['/home'])

    }
    else{
      document.querySelector('.error').innerHTML='Wrong Credentials'
    }
  }

}
