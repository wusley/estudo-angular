import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) {}

  getCarsSmall() {
        return this.http.get('https://www.primefaces.org/primeng/assets/showcase/data/cars-small.json')
                    .toPromise()
                    .then(res => <Car[]> res.data)
                    .then(data => { return data; });
    }
}
