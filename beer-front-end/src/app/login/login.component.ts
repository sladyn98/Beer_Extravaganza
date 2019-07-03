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

  /* 
  loginUser takes in a submit event as a parameter 
  Functions:
  a) Required checks
  b) Calls the loginUser() function from the user Service
  */

   loginUser(event) {
   event.preventDefault()
   this.router.navigate(['loadscreen']);
   const target = event.target
   const username = target.querySelector('#username').value
   const email = target.querySelector('#email').value
   const password = target.querySelector("#password").value
   if(username == "" || email == "" || password == ""){
     alert("Kindly enter username, password and email")
     this.router.navigate([''])
     return
   }
   console.log("Sending data from component")
   localStorage.setItem("currentUser",username)
   this.userService.loginUser(username,email,password)
 
  }
}
