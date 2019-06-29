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
    this.register = {
      username: '',
      email: '',
      password:'',
    };
  
  }
  registerUser() {
    this.userService.registerUser(this.register).subscribe(
      response => {
        alert("User has been created")
      },
      error => console.log('error', error)
    );
  }
}
