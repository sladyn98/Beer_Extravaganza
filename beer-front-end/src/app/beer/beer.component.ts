import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {

  primaryKey;
  apiUrl;
  beerData=null;
  beerId;
  
  constructor(private http: HttpClient,private route: ActivatedRoute) {
    this.route.params.subscribe( params =>
    this.beerId = params.id)
    this.getIndividualBeerData(this.beerId)
    this.beerData=""
   }

  ngOnInit() {
  }

  getIndividualBeerData(beerId){
     this.apiUrl = "http://127.0.0.1:8000/beer/" + beerId + "/"
     console.log(this.apiUrl)
     return this.http.post(this.apiUrl,{
    }).subscribe(data => {
      console.log(data, "This is what we are posting on the server")
      this.beerData = data
    })
  }
}

