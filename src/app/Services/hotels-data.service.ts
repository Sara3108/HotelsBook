import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelsDataService {

  constructor(private httpClient:HttpClient) { }

  getAllHotels(){
    return this.httpClient.get('https://api.myjson.com/bins/tl0bp');
  }
}
