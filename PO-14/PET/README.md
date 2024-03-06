# PetCareAngular

Este projeto foi gerado com o [Angular CLI](https://github.com/angular/angular-cli) versão 17.1.2.

## Descrição
O PetCareAngular é uma aplicação para gerenciar atendimentos em um petshop. Contém funcionalidades como cadastro, listagem, edição e detalhamento de atendimentos. Além disso, agora inclui a funcionalidade de autenticação, permitindo que usuários se autentiquem no sistema para acessar recursos específicos.

A aplicação se conecta a um backend Firebase para armazenar dados e gerenciar a autenticação dos usuários.


## Funcionalidades
1. **Cadastro de atendimento:**
   - Formulário para inserção de dados do atendimento.

2. **Listagem de atendimentos:**
   - Exibição de todos os atendimentos cadastrados.

3. **Edição de atendimento:**
   - Possibilidade de editar informações de um atendimento existente.

4. **Detalhamento do atendimento:**
   - Visualização detalhada das informações de um atendimento.

5. **Autenticação:**
   - Autenticação de usuários para acesso ao sistema.

## Tecnologias Utilizadas
- Angular
- Firebase (backend)
- Material Design para formulários
- TypeScript
- HTML e CSS

## Critérios de Avaliação
O projeto será avaliado considerando os seguintes itens:
- Organização da view nos arquivos `.css` e `.html`.
- Indentação e organização do código TypeScript, com comentários sempre que possível.
- Utilização da biblioteca Material para a criação dos formulários.
- Utilização dos Validators pré-definidos no Angular. Criação de validadores personalizados quando necessário.

## Instalação
Após clonar o repositório, instale as dependências usando o seguinte comando:
```bash
npm install
```

## Execução
Execute o projeto com o seguinte comando:
```bash
ng serve
```

Navegue para `http://localhost:4200/`. O aplicativo será recarregado automaticamente se você modificar qualquer um dos arquivos de origem.
