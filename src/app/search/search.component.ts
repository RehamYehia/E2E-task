import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { DataModel } from '../DataModel';

import { Available } from '../Available';
import { Hotel } from '../Hotel';
import { from } from 'rxjs';


@Component({
  selector: 'app-serch',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  response: DataModel;
  hotels: Hotel[]=[];
  days: any;
  startDate: any;
  endDate: any;
  nu1 = 0;
  nu2 = 0;
  nu3 = 0;
  nu4 = 0;

  selectedCity: string;



  constructor(private service: DataService) {

  }


  ngOnInit() {

    //this.service.getData().subscribe(x => this.response = x);

    this.service.getData().subscribe((response) => {
      this.response = response;

    });

  }
  diffDays: number;
  diffTime: number;
  Traveler: number;

  onChange() {
    this.Traveler = (this.nu1 + this.nu2 + this.nu3 + this.nu4);

    let mydate = new Date(this.startDate);
    let mydate2 = new Date(this.endDate);
    let oneDay = 24 * 60 * 60 * 1000;
    this.diffDays = Math.round(Math.abs((mydate2.getTime() - mydate.getTime()) / (oneDay)));

    //console.log(this.response.hotels);

  }
  onSelectCity(city: string) {

    this.selectedCity = city;


  }

  onSearch() {
    let array = this.response.hotels;
    let availArray: Available[];

    let checkInDate = new Date(this.startDate);
    let checkOutDate = new Date(this.endDate);


    array.forEach(itm => {
      if (itm.city === this.selectedCity) {
        // console.log(itm.city, " ", itm.availability)
        availArray = itm.availability;


        availArray.forEach(x => {
          let from = new Date(x.from);
          let to = new Date(x.to);

          if (checkInDate.getTime() >= from.getTime() && checkOutDate.getTime() <= to.getTime()) {
            console.log(true)
            this.hotels.push(itm)
          }

        });
      }
    });





  }
}
