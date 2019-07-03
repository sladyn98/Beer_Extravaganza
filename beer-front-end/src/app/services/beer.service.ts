import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class BeerService {


  downVoteUrl
  upVoteUrl
  postBeerUrl
  constructor(private http: HttpClient,private router: Router) { 
  }
  
 /* 
  upVoteBeerCard() takes in the beerCardId rather the pk
  and makes a post to the server to increase the upvote count.
*/
  upVoteBeerCard(pk){
    this.upVoteUrl = 'http://127.0.0.1:8000/beer_upvote/' + pk + '/'
    return this.http.post(this.upVoteUrl,{
    }).subscribe(data => {
      console.log(data, "This is what we are posting on the server")
    })
 }
 
 /* 
  Same functionality as the upvoteBeerCard but increases the downvote count.
*/
  downVoteBeerCard(pk){
  this.downVoteUrl = 'http://127.0.0.1:8000/beer_downvote/' + pk + '/'
  return this.http.post(this.downVoteUrl,{
  }).subscribe(data => {
    console.log(data, "This is what we are posting on the server")
  })
}

/* 
  postBeerData takes in all the parameters required to construct a
  beerCard such as the brewer, serving, flavour, rating, beerLink
  price and constructs the beerData object.
  Posts the data to the beer_add api
*/
  postBeerData(brewer, serving, flavour, rating, beerLink, price ){
    console.log("Received data to post: ", brewer, serving, flavour, rating, beerLink, price)
    var beerData = 
                     {
                         "imageUrl":beerLink,
                         "brewer": brewer,
                         "price": price,
                         "rating":rating,
                         "servingType":serving,
                         "flavourDesc":flavour,
                         "upVotes":0,
                         "downVotes":0,
                     };

  console.log(beerData)
  this.postBeerUrl = 'http://127.0.0.1:8000/beer_add/'
  return this.http.post(this.postBeerUrl,beerData,{
  }).subscribe(data => {
   console.log("This is the response from the server",data)
  })

  }


}
