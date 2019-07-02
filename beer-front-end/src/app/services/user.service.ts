import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Router } from '@angular/router';


@Injectable()
export class UserService {

  constructor(private http: HttpClient,private router: Router) { }


  loginUser(username, email, password){
     return this.http.post('http://127.0.0.1:8000/user_list/users/',{
      username,
      email,
      password
     }).subscribe(data => {
       console.log(data, "This is what we are posting on the server")
       
     })

  }

}
