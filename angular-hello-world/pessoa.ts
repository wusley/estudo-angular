class Pessoa {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
}

let pessoa = new Pessoa('Wesley');

console.log('Instancia de pessoa:', pessoa);
