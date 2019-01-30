import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-contatos-listagem',
  templateUrl: './contatos-listagem.component.html',
  styleUrls: ['./contatos-listagem.component.scss']
})
export class ContatosListagemComponent implements OnInit {

  hamsters: Array<any>;

  constructor( private contatoService: ContatoService ) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.contatoService.listar().subscribe( dados => {

      this.hamsters = dados;

      console.log( this.hamsters );

    } );
  }

}
