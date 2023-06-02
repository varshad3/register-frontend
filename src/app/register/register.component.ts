import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormBuilder, Validators } from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerErrorMsg:string = ''
  registerSuccessMsg:string=''
  registerStatus:boolean=false

  registerForm=this.fb.group({
    // form array
    firstname:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    lastname:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    address:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    gender:['',],
    dob:['',[Validators.required]],
    email:['',[Validators.required]],
    mobile:['',[Validators.required,Validators.pattern('[0-9]*')]],
    course:['',[Validators.required]],

  })
  

  constructor(private api:ApiService,private fb:FormBuilder,private registerRouter:Router){
  }

  register(){
    if(this.registerForm.valid){
      let firstname=this.registerForm.value.firstname
      let lastname=this.registerForm.value.lastname
      let address=this.registerForm.value.address
      let mobile=this.registerForm.value.mobile
      let course=this.registerForm.value.course
      let gender=this.registerForm.value.gender
      let email=this.registerForm.value.email
      let dob=this.registerForm.value.dob
      // api call for register
      this.api.register(firstname,lastname,address,mobile,dob,email,gender,course)
      .subscribe(
        // response 200
        (result:any)=>{
          // login success status set as true
          this.registerStatus=true
        // alert(result.message)
        this.registerSuccessMsg=result.message
        setTimeout(() => {

            // redirect to home pge

          this.registerRouter.navigateByUrl('home')

        }, 3000);
      },
      
      // respons 400
      (result:any)=>{
        this.registerErrorMsg = result.error.message
        setTimeout(()=>{
          this.registerForm.reset()
          this.registerErrorMsg=''
        },3000)
      }
      )
    }
    else{
      alert('invalid form...')
    }
  }

}
