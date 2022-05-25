import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtAuthService } from 'src/app/service/jwt-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private activatedRoute : ActivatedRoute , private router: Router , private authService :  JwtAuthService ) { }



  ngOnInit(): void {
  }
  
  logIn(dataForm :any){
    this.authService.loginUser(dataForm.value);
    
  }

 

}
