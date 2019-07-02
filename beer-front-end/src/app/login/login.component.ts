import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  register;

  constructor(private userService: UserService,private router: Router) {}

  ngOnInit(){
    
  }
  
  // Catch username already exists error
  loginUser(event) {
   event.preventDefault()
   const target = event.target
   const username = target.querySelector('#username').value
   const email = target.querySelector('#email').value
   const password = target.querySelector("#password").value
   console.log("Sending data from component")
   this.userService.loginUser(username,email,password)
   this.router.navigate(['beer-list']);
  }


}
