import { Component, OnInit } from '@angular/core';
import { HotelsDataService } from 'src/app/Services/hotels-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  hotels: any[] = [];
  loading: boolean = false;
  result;
  filterItems: any[] = ["kkk"];
  checkin: Date;
  checkout: Date;
  nights: number;
  availability:any[];

  constructor(private service: HotelsDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.loading = true;

    this.checkin = new Date(Date.parse(this.route.snapshot.paramMap.get('checkIn')));
    this.checkout = new Date(Date.parse(this.route.snapshot.paramMap.get('checkout')));


    var Difference_In_Time = this.checkout.getTime() - this.checkin.getTime();

    // To calculate the no. of days between two dates 
    this.nights = Difference_In_Time / (1000 * 3600 * 24);

    this.service.getAllHotels().subscribe(response => {
      this.result = response;
      this.hotels = this.result.hotels;

      this.hotels.filter(f =>{ f.availability= f.availability.filter(
        x => {
          var from = x.from.split('-');
          var to = x.to.split('-');

          var fdd = parseInt(from[1]);
          var fmm = parseInt(from[0]);
          var fyy = parseInt(from[2]);

          var tdd = parseInt(to[1]);
          var tmm = parseInt(to[0]);
          var tyy = parseInt(to[2]);

          var convertedFrom = String(fdd + "/" + fmm + "/" + fyy);
          var convertedTo = String(tdd + "/" + tmm + "/" + tyy);

          console.log("from  " + Date.parse(convertedFrom) + "   checkin " + this.checkin.getTime());
          console.log("to  " + Date.parse(convertedTo) + "   checkout " + this.checkout.getTime());

          return (Date.parse(convertedFrom) <= this.checkin.getTime() &&
          Date.parse(convertedFrom) <= this.checkout.getTime() &&
            Date.parse(convertedTo) >= this.checkout.getTime() &&
            Date.parse(convertedTo) >= this.checkin.getTime());
        })
        
      });
      console.log(this.hotels);

      this.availability=this.hotels.filter(x=>x.availability.length>0);
      this.assignCopy();

      console.log(this.availability);
      this.loading = false;

    })
  }
  
  // when nothing has typed
  assignCopy() {
    this.filterItems = Object.assign([], this.availability);
  }

  //when typing in textbox
  filterItem(value) {
    if (!value) {
      this.assignCopy();
    }
    this.filterItems = Object.assign([], this.availability).filter(
      item => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
    )
  }


  sortPriceDes() {
    return this.filterItems.sort((a, b) => a.price - b.price);
  }

  sortPriceAse() {
    return this.filterItems.sort((a, b) => b.price - a.price);
  }

  sortNameAZ() {
    return this.filterItems.sort((a, b) => a.name < b.name ? -1 : 1);
    // return this.filterItems.sort((a,b) => b.name-a.name);
  }

  sortNameZA() {
    return this.filterItems.sort((a, b) => b.name < a.name ? -1 : 1);
    // return this.filterItems.sort((a,b) => b.name-a.name);
  }

  selected() {
    console.log('lllllll')
  }

}
