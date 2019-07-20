import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employeeDetails
  constructor(private data : DataService, private route:Router,private authenticate : AuthenticationService) { }

  ngOnInit() {
    this.data.currentData.subscribe((res)=>{
      this.employeeDetails=res;
      // console.log(this.employeeDetails)
    })
    this.authenticate.currentLoginStatus.subscribe(res=>{
      if(!res){
        this.route.navigate(['/login'])
      }
    })
  }
  edit(){

  }
  delete(evt){
    let employeeId = parseInt(evt.target.id);
    let id
    this.employeeDetails.forEach((ele,i)=>{
      if(ele.id==employeeId)
      id=i;
    })
    this.employeeDetails.splice(id,1)
    this.data.currentData.subscribe(this.employeeDetails)
    console.log(this.employeeDetails)
    console.log(employeeId)
    console.log(id)


  }

}
