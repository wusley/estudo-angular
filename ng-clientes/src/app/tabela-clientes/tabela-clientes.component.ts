import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabela-clientes',
  templateUrl: './tabela-clientes.component.html',
  styleUrls: ['./tabela-clientes.component.scss']
})
export class TabelaClientesComponent implements OnInit {

  @Input("dados") hamsters: Array<any>;

  constructor() { }

  ngOnInit() {
  }

  listar() {

  }

}
