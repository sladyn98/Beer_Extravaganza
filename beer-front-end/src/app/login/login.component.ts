import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  register;

  constructor(private userService: UserService) {}

  ngOnInit(){
    
  }
  
  loginUser(event) {
   event.preventDefault()
   const target = event.target
   const username = target.querySelector('#username').value
   const email = target.querySelector('#email').value
   const password = target.querySelector("#password").value
   this.userService.loginUser(username,email,password)
  }


}
