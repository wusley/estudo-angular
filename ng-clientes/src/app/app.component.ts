import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  listaHamsters: Array<any> = [
    { hamsterId: 0 },
    { hamsterId: 1 },
    { hamsterId: 2 },
  ];

}
