import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   table:any

  constructor(private api:ApiService,private homeRouter:Router){

  }

  ngOnInit(): void {
    this.api.getAllStudents().subscribe((result:any)=>{
      console.log(result);
      this.table=result
      

    })
  }
  

  home(){
    this.homeRouter.navigateByUrl('')
  }
}
