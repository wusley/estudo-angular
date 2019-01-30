import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  contatosUrl = 'https://service.cryptohamsters.co/hamsters-filter?limit=16&page=1';

  constructor( private http: HttpClient ) { }

  listar() {
    return this.http.get<any[]>(`${this.contatosUrl}`);
  }
}
