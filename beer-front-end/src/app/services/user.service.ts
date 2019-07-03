import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Router } from '@angular/router';


@Injectable()
export class UserService {

  constructor(private http: HttpClient,private router: Router) { }

  /* 
  loginUser takes in username, email and password as parameters
  Functions:
  a) Makes a post call to the users api 
  b) If successfull does a redirect to the beer list.
  c) Else alerts the specific error message
  */
  loginUser(username, email, password){
     return this.http.post('http://127.0.0.1:8000/user_list/users/',{
      username,
      email,
      password
     }).subscribe(data => {
       console.log(data, "This is what we are posting on the server")
       this.router.navigate(['beer-list']);
     }, 
     (error) => { 
       console.log(error)
       if(error.error.email == "Enter a valid email address."){
         alert("Kindly enter a valid email address")
       }
      else if(error.error.username == "A user with that username already exists."){
        alert("This username already exists")
      }else if (error.error.password == "This field may not be blank."){
        alert("Kindly enter the password")
      } 
      this.router.navigate(['']) } )
  }
}
