import { Component } from '@angular/core';
import { AtendimentoService } from '../atendimento.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})

export class ListagemComponent {
  atendimentos: {
    id: string,
    nomeCliente: string,
    email: string,
    nomePet: string,
    especie: string,
    idade: number,
    ident: string,
    dataAtendimento: string,
    tipoAtendimento: string,
    valor: number,
    observacoes: string
  }[] = [];


  constructor(private atendimentoService: AtendimentoService) {
    this.atendimentoService.listar()
      .subscribe(response => {
        this.atendimentos = Object.keys(response).map((id: any) => ({
          id,
          ...response[id],
        }));
      },
        error => {
          console.error('Erro ao listar atendimentos:', error);
        });
  }

}
