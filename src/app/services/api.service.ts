import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  // register 
  register(firstname:any,lastname:any,address:any,mobile:any,dob:any,email:any,gender:any,course:any){

    // req body
    const body={
            firstname,
            lastname,
            address,
            mobile,
            course,
            gender,
            email,
            dob
    }

    // make api call to server for register
    return this.http.post('http://localhost:3000/register',body)

  }

  // get all student 
  getAllStudents(){
    return this.http.get('http://localhost:3000/home')
  }
}
