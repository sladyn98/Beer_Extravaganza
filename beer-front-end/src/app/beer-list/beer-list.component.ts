import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BeerService } from '../services/beer.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css'],
  providers: [BeerService]

})
export class BeerListComponent implements OnInit {


   private apiUrl = "http://127.0.0.1:8000/beer_list"
   data: {};

  constructor(private http: HttpClient) {
    this.getData()
   }

  ngOnInit() {
  }

  getData() {
    return this.http.get(this.apiUrl, {}).subscribe(data => {
       console.log(data, "This is what we got from the server")
       this.data = JSON.parse(JSON.stringify(data))
     })
  }


}

