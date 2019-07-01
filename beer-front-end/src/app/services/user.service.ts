import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }


  loginUser(username, email, password){
     return this.http.post('http://127.0.0.1:8000/user_list/users/',{
      username,
      email,
      password
     }).subscribe(data => {
       console.log(data, "This is what we got from the server")
     })
  }

}
