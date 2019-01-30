import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import {Car} from './car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

      constructor(private http: HttpClient) {}

      getCarsLarge() {
          return this.http.get<any>('assets/cars-large.json')
                      .toPromise()
                      .then(res => <Car[]> res.data)
                      .then(data => { return data; });
      }
}
