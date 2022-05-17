import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute , private router: Router) { }

  ngOnInit(): void {
  }
  
  logIn(formData: any){
    this.router.navigate(['/task']);
  }

}
