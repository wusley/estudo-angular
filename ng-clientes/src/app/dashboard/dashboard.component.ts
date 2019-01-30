import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  lista: Array<any> = [
    { hamsterId: 2 },
    { hamsterId: 1 },
    { hamsterId: 0 },
  ];

  constructor() { }

  ngOnInit() {
  }

  get hamstersLista() {
    return this.lista;
  }

}
