import {AbstractControl} from '@angular/forms';
export class checkInValidation {

    static MissedDate(AC: AbstractControl) {

       let checkIn =new Date( AC.get('checkIn').value); // to get value in input tag
       let timeNow =new Date(); // to get value in input tag
        if(checkIn.getTime() >= timeNow.getTime()) {
            return null
        } else {
            AC.get('checkIn').setErrors( {MissedDate: true} )
        }
    }
}