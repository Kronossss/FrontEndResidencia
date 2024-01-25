import { Component, OnInit } from '@angular/core';
import { ResultadosService } from '../services/resultados.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css'],
})
export class ResultadosComponent implements OnInit {
  noticias: any[] = [];

  constructor(private resultadosService: ResultadosService) {}

  ngOnInit() {
    this.carregarNoticias();
  }

  carregarNoticias() {
    this.resultadosService.obterNoticias().subscribe(
      (data) => {
        this.noticias = data;
      },
      (erro : string) => {
        console.error('Erro ao obter notícias:', erro);
      }
    );
  }
}
