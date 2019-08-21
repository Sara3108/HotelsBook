import { Component, OnInit } from '@angular/core';
import { HotelsDataService } from 'src/app/Services/hotels-data.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  hotels: any[] = [];
  loading:boolean=false;
  result;
  filterItems;

  constructor(private service:HotelsDataService) { }

  ngOnInit() {
    this.service.getAllHotels().subscribe(response=>{
      this.result = response;
      this.hotels=this.result.hotels;
      console.log(this.hotels);
      console.log( typeof(this.hotels));
     
      this.loading=true;



    })
  }

   // when nothing has typed
   assignCopy() {
    this.filterItems = Object.assign([], this.hotels);
  }

  //when typing in textbox
  filterItem(value) {
    if (!value) {
      this.assignCopy();
    }
    this.filterItems = Object.assign([], this.hotels).filter(
      item => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
    )
  }

}
