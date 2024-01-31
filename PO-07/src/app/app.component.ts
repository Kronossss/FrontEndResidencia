// app.component.ts

import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  categorias: string[] = [];
  veiculos: any = {};

  categoriaSelecionada: string | null = null;
  veiculoSelecionado: any | null = null;
  veiculosSelecionados: any[] = [];

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getVeiculos().subscribe(data => {
      this.veiculos = data;
      this.categorias = Object.keys(this.veiculos);
    });
  }

  selecionarCategoria(categoria: string) {
    this.categoriaSelecionada = categoria;
    this.veiculoSelecionado = null; // Reseta o veículo selecionado quando a categoria muda
  }

  selecionarVeiculo(veiculo: any) {
    this.veiculoSelecionado = veiculo;
  }

  adicionarVeiculoAoCarrinho() {
    if (this.veiculoSelecionado) {
      this.veiculosSelecionados.push(this.veiculoSelecionado);
      this.veiculoSelecionado = null; // Reseta o veículo selecionado após adicionar ao carrinho
    } else {
      alert('Selecione um veículo para adicionar ao carrinho!');
    }
  }

  removerVeiculoDoCarrinho(index: number) {
    this.veiculosSelecionados.splice(index, 1);
  }
}
