// Criação da classe Computador
class Computador {
  constructor(nome, marca, processador, memoria) {
    this.nome = nome;
    this.marca = marca;
    this.processador = processador;
    this.memoria = memoria;
  }
  getNome() {
    return this.nome;
  }
  getMarca() {
    return this.marca;
  }
}

// Criação dos objetos
const computador1 = new Computador('Desktop', 'Beyblade', 'AMD 5 3600', '16GB');
const computador2 = new Computador('Desktop', 'Beyblade', 'Intel Core i7', '24GB');
const computador3 = new Computador('Notebook', 'Beyblade', 'AMD 5 3600', '32GB');

// Função que retorna um map do objeto
function retornaMap(objeto) {
  return new Map(Object.entries(objeto));
}

// Função que cria uma lista desordenada
function criaLista(map) {
  const lista = document.createElement('ul');
  document.body.appendChild(lista);
  for (let [chave, valor] of map) {
    const li = document.createElement('li');
    li.innerHTML = `${chave}: ${valor}`;
    lista.appendChild(li);
  }
}

// Chamada das funções
criaLista(retornaMap(computador1));
criaLista(retornaMap(computador2));
criaLista(retornaMap(computador3));