import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute , private router: Router) { }

  ngOnInit(): void {
  }

  signUp(formData: any){
    console.log(formData.value.username)
    this.router.navigate(['/login',formData.value.username]);
  }

}
