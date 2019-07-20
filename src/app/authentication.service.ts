import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  login = false
  private LoginStatus= new BehaviorSubject(this.login);
  currentLoginStatus= this.LoginStatus.asObservable();
  constructor(private data:DataService) { }

  validate(username,password){
    if(username==this.data.profile.email && password==this.data.profile.password){
      this.login=true;
      this.LoginStatus.next(this.login);
      
    }
    else{
      this.login=false;
    }
  }
  updateLoginStatus(value){
    this.LoginStatus.next(value);
  }
}
