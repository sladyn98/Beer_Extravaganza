import { Component, OnInit } from '@angular/core';
import { BeerService } from '../services/beer.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-beer-create',
  templateUrl: './beer-create.component.html',
  styleUrls: ['./beer-create.component.css'],
  providers: [BeerService]
})
export class BeerCreateComponent implements OnInit {

  selectedFile: File
  imgUrl
  responseData
  beerLink
  
  constructor(private http: HttpClient,private beerService:BeerService,private router: Router) { }

  ngOnInit() {
  }

/* 
  submitBeerData(event) takes an event as a parameter
  Functions:
  a) Gets all the required params from the html page
  Calls the uploadData().
*/
  submitBeerData(event){
    console.log("I want to create a beer")
    event.preventDefault()
    this.router.navigate(['loadscreen'])
    const target = event.target
    const brewer = target.querySelector('#brewer').value
    const serving = target.querySelector('#serving').value
    const flavour = target.querySelector('#flavour').value
    const rating = target.querySelector('#rating').value
    const price = target.querySelector('#price').value

    if(brewer == "" || serving == "" || flavour == "" || rating == "" || price == ""){
      alert("Kindly enter all of the relevant details")
      this.router.navigate(['beer-create'])
      return
    }
    this.uploadData(brewer,serving,flavour,rating,price)
  }

    
/* 
  onFileChanged(event) handles the change of the uploaded file event
  It keeps changing the selectedFile object as per the user change.
  Functions:
  a) Sets the selectedFile object if it detects there has been 
  a change in the file.
*/
  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
    console.log(this.selectedFile,"The following file has been uploaded")
  }

  /* 
  uploadData takes all the params
  It uploads the image to imgur to get the image link.
  The reason for this was in the real world we would be storing
  the image on a server and then obtaining the link.
  So I did something similar my storing the image on imgur
  using its api and storing the link in the db.
  You can use my client Id for that purpose.
  It makes  a call to postBeerData() in the beer service to 
  handle the post action.
*/ 
  uploadData(brewer, serving, flavour, rating, price){
    var beerImageLink;
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Client-ID 3f40f86eef92465'
     })
    };
    this.imgUrl = "https://api.imgur.com/3/image"
    return this.http.post(this.imgUrl, this.selectedFile, httpOptions).subscribe(data => {
    console.log(data, "This is what we got from the  server")
    this.responseData = JSON.parse(JSON.stringify(data))
    console.log("Response data", this.responseData['data']['link'])
    this.beerLink = this.responseData['data']['link']
    this.beerService.postBeerData(brewer,serving,flavour,rating,this.beerLink,price)
    this.router.navigate(['beer-list'])  
    }, 
    (error) => { 
      console.error(error);
     })
  }
}
