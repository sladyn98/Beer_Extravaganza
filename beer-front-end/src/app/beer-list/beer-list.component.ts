import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BeerService } from '../services/beer.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css'],
  providers: [BeerService,UserService]

})
export class BeerListComponent implements OnInit {

   private apiUrl = "http://127.0.0.1:8000/beer_list"

  //  variable used to store the beer data. One way data binding used here.
   data: {};

  constructor(private http: HttpClient,private beerService:BeerService,
    private router: Router, private userService: UserService) {
    this.getBeerData()
   }

  ngOnInit() {
  }
  /* 
  getBeerData() gets the required beer data and stores it in a local data variable
  Functions:
  a) Required checks
  b) Calls the loginUser() function from the user Service
  */
  getBeerData() {
    return this.http.get(this.apiUrl, {}).subscribe(data => {
       console.log(data, "This is what we got from the server")
       this.data = JSON.parse(JSON.stringify(data))
     })
  }

  /* 
  recordUpvote() add an upvote to the respective beer card.
  Params: Button click event, Data item
  Functions:
  a) Makes a call to the upVoteBeerCard() in the beer service
  which handles the post requrest to the backend.
  */
  recordUpVote(event, item){
    console.log("Upvoted")
    event.preventDefault()
    const target = event.target
    this.beerService.upVoteBeerCard(item.pk)
    location.reload();
  }

   /* 
  recordDownvote() adds a downvote to the respective beer card.
  Params: Button click event, Data item
  Functions:
  a) Makes a call to the downVoteBeerCard() in the beer service
  which handles the post requrest to the backend.
  */
  recordDownVote(event, item){
    console.log("Downvoted")
    event.preventDefault()
    const target = event.target
    this.beerService.downVoteBeerCard(item.pk)
    location.reload();
  }

   /* 
   onRead() reroutes the app to the beercard page.
   Takes in the beerData as argument and uses its primary key to fetch 
   the corresponding page.
  */
  onRead(beerData){
    console.log("Rerouting to beer card",beerData.pk)
    this.router.navigate(['beer',beerData.pk]);
  }

  /* 
   createBeerRoute() reroutes the app to create-bber
  */
  createBeerRoute(){
    console.log("Rerouting to beer create")
    this.router.navigate(['beer-create']);
  }

 /* 
   logout() logs the user out and delets a the session.
  */
  logout(){
    console.log("Logging out the user")
    localStorage.clear()
    this.router.navigate(['']);
  }

}

