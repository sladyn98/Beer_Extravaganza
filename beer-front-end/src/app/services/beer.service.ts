import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BeerService {


  customUrl
  constructor(private http: HttpClient) { 
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


}
