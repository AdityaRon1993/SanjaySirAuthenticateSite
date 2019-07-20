import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  constructor(private data: DataService,private authenticate : AuthenticationService,
    private route : Router) { }
  profiledata
  ngOnInit() {
    this.profiledata=this.data.profile;
    document.querySelector('.address').innerHTML=this.profiledata.address

    this.authenticate.currentLoginStatus.subscribe(res=>{
      if(!res){
        this.route.navigate(['/login'])

      }
    })
  }

}
