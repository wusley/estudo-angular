import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  // para se conectar ao servidor, usamos modulo 'http'


  constructor() { }

  getCursos() {
    return [
      'Java',
      'Angular'
    ];
  }
}
