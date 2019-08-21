import {AbstractControl} from '@angular/forms';
export class checkOutValidation {

    static inValidRange(AC: AbstractControl) {

       let checkIn =new Date( AC.get('checkIn').value); // to get value in input tag
       let checkOut =new Date( AC.get('checkOut').value); // to get value in input tag
        if(checkIn.getTime() > checkOut.getTime()) {
            AC.get('checkOut').setErrors( {inValidRange: true} )
        } else {
            return null
        }
    }
}