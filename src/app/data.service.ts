import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  employees = [{
    "id": 101,
    "Name": "Aditya",
    "designation": "Engineer",
    "location": "Bangalore"
 },
 {
    "id": 102,
    "Name": "Bikram",
    "designation": "Engineer",
    "location": "Bangalore"
 },
 {
    "id": 103,
    "Name": "Dhruvajoti",
    "designation": "Engineer",
    "location": "Bangalore"
 },
 {
    "id": 104,
    "Name": "Name",
    "designation": "Engineer",
    "location": "Bangalore"
 },
 {
    "id": 106,
    "Name": "Ajoy",
    "designation": "Engineer",
    "location": "Bangalore"
 }
 ]
profile = {
  username:'TestUser',
  password:'test@123',
  email:'test@gmail.com',
  phone:'+91 8974516447',
  address:'<p>#90 Kormangla,</p><p>Bangalore-560 000</p>'
}
  private data= new BehaviorSubject(this.employees);
  currentData= this.data.asObservable();


  constructor() { }
  
  updateData(newData){
    this.data.next(newData);
  }
}
