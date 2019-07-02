import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class BeerService {


  customUrl
  constructor(private http: HttpClient,private router: Router) { 
  }
  
 
  upVoteBeerCard(pk){
    this.customUrl = 'http://127.0.0.1:8000/beer_upvote/' + pk + '/'
    return this.http.post(this.customUrl,{
    }).subscribe(data => {
      console.log(data, "This is what we are posting on the server")
    })
 }
 
  downVoteBeerCard(pk){
  this.customUrl = 'http://127.0.0.1:8000/beer_downvote/' + pk + '/'
  return this.http.post(this.customUrl,{
  }).subscribe(data => {
    console.log(data, "This is what we are posting on the server")
  })
}

  postBeerData(brewer, serving, flavour, rating, beerLink ){
 
    console.log("Received data to post: ", brewer, serving, flavour, rating, beerLink)
  }


}
