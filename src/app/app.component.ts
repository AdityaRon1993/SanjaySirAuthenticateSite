import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SanjaySirAssignment';
  username = 'User Name';
  statusLogin
  constructor(private data : DataService, private authenticate : AuthenticationService){
    

  }
  ngOnInit(){
    this.authenticate.currentLoginStatus.subscribe((res)=>{
      if(!res){
        this.username='Please Login'
      }
      else{
        this.username=this.data.profile.username;
      }
    })
    
  }
  show_Content(event){
    document.querySelector('.content').classList.toggle('hide')
    document.querySelector('.content').classList.toggle('show')
    event.target.lastChild.classList.toggle('rotate');

  }
  logout(){
    this.authenticate.updateLoginStatus(false);

  }
}
