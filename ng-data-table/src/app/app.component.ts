import { Component, OnInit } from '@angular/core';
import { CarService } from './car.service';

import { Car } from './car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  cars: Car[];

  cols: any[];

  constructor(private carService: CarService) { }

  ngOnInit() {
      this.carService.getCarsSmall().then( cars => this.cars = cars );

      this.cols = [
          { field: 'vin', header: 'Vin' },
          { field: 'year', header: 'Year' },
          { field: 'brand', header: 'Brand' },
          { field: 'color', header: 'Color' }
      ];
  }
}
