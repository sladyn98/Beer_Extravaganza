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

  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
    console.log(this.selectedFile,"The following file Has been uploaded")
  }


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
     }
     
     )
  

  }


}
