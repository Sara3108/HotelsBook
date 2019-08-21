import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { checkOutValidation } from 'src/app/CustomValidations/checkOut.validators';
import { checkInValidation } from 'src/app/CustomValidations/checkIn.validators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit() {
  }

  form = new FormGroup({
    city: new FormControl('', [Validators.required]),
    checkIn: new FormControl('', [Validators.required]),
    checkOut: new FormControl('', [Validators.required])
  }, {
    validators: [checkOutValidation.inValidRange,checkInValidation.MissedDate]  
  })

  /////// get controls ///////

  getCity(){
    return this.form.get('city');
  }

  getCheckIn(){
    return this.form.get('checkIn');
  }

  getCheckOut(){
    return this.form.get('checkOut');
  }

  ////////// error Msgs //////////

  cityErrorMsg() {
    return this.getCity().hasError('required') ? 'Please Enter your Destination ' : '';
  }

  CheckInErrorMsg() {
    return this.getCheckIn().hasError('required') ? 'Please Enter Checkin date' : 
    this.getCheckIn().hasError('MissedDate') ? 'Missed Date' : '';  
  }

  CheckOutErrorMsg() {
    return this.getCheckOut().hasError('required') ? 'Please Enter Checkout date' :
    this.getCheckOut().hasError('inValidRange') ? 'Checkout Date not valid' : '';
  }

  ////// on form submit ////
  search(){
    if(this.form.valid){
      this.router.navigate(['/hotels',{checkIn:this.getCheckIn().value, checkout:this.getCheckOut().value}]);
    }
  }

}
