import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(private router:Router) {
}

login = new FormGroup({
  username: new FormControl('',[Validators.required,Validators.minLength(3)]),
  password: new FormControl('',[Validators.required,Validators.pattern('^[A-Z].*'),Validators.minLength(6)]),
})
  GoToProjects(){
this.router.navigate(['/projects']);
  }
}
