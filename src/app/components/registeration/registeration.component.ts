import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from './../../user';
import { NgForm } from '@angular/forms';
import { JwtAuthService } from 'src/app/service/jwt-auth.service';


@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})

export class RegisterationComponent implements OnInit {
  firstName : String | undefined ;
  lastName : String | undefined ;
  constructor(private activatedRoute : ActivatedRoute , private router: Router , private authService : JwtAuthService) { }

  ngOnInit(): void {
  }

  signUp(formData: NgForm){
    console.log(formData.value)
    this.authService.registerUser(formData.value);
  }

}
