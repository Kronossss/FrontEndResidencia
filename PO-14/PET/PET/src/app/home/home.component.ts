import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: ` 
  <div class="container">
    <h1>Bem-vindo ao PetCare</h1>
    <p>Escolha uma opção no menu acima</p>

    <h2>Conheça o PetCare</h2>

    <p>O PetCare é um sistema de gerenciamento de atendimentos veterinários. Com ele, é possível cadastrar, listar e detalhar atendimentos de animais.</p>

    <div>
      <img src="https://s3.amazonaws.com/i.snag.gy/UFLDWO.jpg" alt="PetCare" width="500" height="300">
    </div>

    <button routerLink="/cadastro" class="btn btn-primary">Cadastre o seu atendimento</button>
    </div>
    `,
  styles: `
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  }
  
  h1 {
    color: #333;
  }
  
  h2 {
    color: #555;
  }
  
  p {
    color: #777;
    line-height: 1.5;
  }
  
  img {
    max-width: 100%;
    height: auto;
    margin-top: 20px;
  }
  
  .btn {
    display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    background-color: #007bff;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .btn:hover {
    background-color: #0056b3;
  }
  
  `
})
export class HomeComponent {

}
