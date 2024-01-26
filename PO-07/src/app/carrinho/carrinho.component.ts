import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent {
  @Input() veiculosSelecionados: any[] = [];
  @Output() veiculoRemovido = new EventEmitter<any>();

  removerVeiculo(index: number) {
    this.veiculoRemovido.emit(index);
  }
}
