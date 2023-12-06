// Criação do formulário
const form = document.createElement('form');
form.setAttribute('id', 'form');
document.body.appendChild(form);

// Criação do campo de texto
const input = document.createElement('input');
input.setAttribute('id', 'tarefa');
input.setAttribute('type', 'text');
input.setAttribute('placeholder', 'Digite uma tarefa');
form.appendChild(input);

// Criação do botão
const button = document.createElement('button');
button.setAttribute('id', 'adicionar');
button.setAttribute('type', 'button');
button.innerHTML = 'Adicione';
form.appendChild(button);

// Criação da lista
const lista = document.createElement('ul');
lista.setAttribute('id', 'listaTarefas');
document.body.appendChild(lista);

// Criação da classe Tarefa
class Tarefa {
  constructor(nome) {
    this.nome = nome;
  }
}

// Função adicionaTarefaDOM
function adicionaTarefaDOM(tarefa) {
  const li = document.createElement('li');
  li.innerHTML = tarefa.nome;
  lista.appendChild(li);
}

// Função adicionaTarefaNoStorage
function adicionaTarefaNoStorage(tarefa) {
  let tarefas = JSON.parse(localStorage.getItem('tarefas'));
  if (tarefas === null) {
    tarefas = [];
  }
  tarefas.push(tarefa);
  localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

// Função carregaTarefasDoStorage
function carregaTarefasDoStorage() {
  const tarefas = JSON.parse(localStorage.getItem('tarefas'));
  if (tarefas !== null) {
    for (let i = 0; i < tarefas.length; i += 1) {
      adicionaTarefaDOM(tarefas[i]);
    }
  }
}

// Evento de clique do botão
button.addEventListener('click', () => {
  const tarefa = new Tarefa(input.value);
  adicionaTarefaDOM(tarefa);
  adicionaTarefaNoStorage(tarefa);
  input.value = '';
});

// Chamada da função carregaTarefasDoStorage
carregaTarefasDoStorage();
